pragma solidity =0.5.16;

import '../RaizerERC20.sol';

contract ERC20 is RaizerERC20 {
    constructor(uint _totalSupply) public {
        _mint(msg.sender, _totalSupply);
    }
}
