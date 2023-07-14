// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;

contract Incrementor {
    uint public x;

    event Incremented(uint newValue);

    function increment() public {
        x += 1;
        emit Incremented(x);
    }
}
