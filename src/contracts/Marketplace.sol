pragma solidity ^0.5.0;

contract Marketplace {
    string public name; // State variable permanently stored in contract storage https://bit.ly/3pgZn6h

    constructor() public {
        name = "Nakamoto List";
    }
}