package com.altercode.gerencg.service;

import com.altercode.gerencg.dto.CommissionCodeDTO;
import com.altercode.gerencg.entity.CommissionCode;
import com.altercode.gerencg.entity.CommissionItem;
import com.altercode.gerencg.repository.CommissionCodeRepository;
import com.altercode.gerencg.repository.CommissionItemRepository;
import com.altercode.gerencg.service.iservice.ICommissionCodeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class CommissionCodeService implements ICommissionCodeService {

    @Autowired
    private CommissionCodeRepository codeRepository;

    @Autowired
    private CommissionItemRepository itemRepository;

    @Override
    public Page<CommissionCodeDTO> findItemsByCode(Pageable pageable, String code) {
        Page<CommissionCode> result = codeRepository.findItemsByCode(pageable, code);
        return result.map(x -> new CommissionCodeDTO(x));
    }

    @Override
    public CommissionCodeDTO findCodeById(String id) {
        CommissionCode result = codeRepository.findById(id).get();
        return new CommissionCodeDTO(result);
    }

    @Override
    public CommissionCodeDTO commissionTotalValues(CommissionCodeDTO dto) {
        CommissionCode code = codeRepository.findById(dto.getCode()).get();

        double sumValues = 0;
        int sumQuantity = 0;
        int sumPackages = 0;
        for (CommissionItem i : code.getCommissions()) {
            sumValues = sumValues + i.getTotalValue();
            sumQuantity = sumQuantity + i.getItemQuantity();
            sumPackages = sumPackages + i.getPackageQuantity();
        }

        code.setTotalValue(sumValues);
        code.setTotalQuantity(sumQuantity);
        code.setTotalPackage(sumPackages);
        codeRepository.save(code);

        return new CommissionCodeDTO(code);
    }

    @Override
    public CommissionCodeDTO saveCommissionCode(CommissionCodeDTO dto) {

        CommissionCode add = new CommissionCode();
        add.setCode(dto.getCode());
        add.setCommissionDate(dto.getCommissionDate());
        add.setDistributor(dto.getDistributor());

        return new CommissionCodeDTO(codeRepository.saveAndFlush(add));
    }
}
