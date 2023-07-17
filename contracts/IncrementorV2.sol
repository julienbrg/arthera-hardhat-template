// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;

contract IncrementorV2 {
    uint public x;
    uint public y;

    event Incremented(uint newValue);
    event Decremented(uint newValue);

    function increment() public {
        x += 1;
        emit Incremented(x);
    }

    function decrement() public {
        x -= 1;
        emit Decremented(x);
    }

    function incrementY() public {
        y += 1;
        emit Incremented(y);
    }
}
