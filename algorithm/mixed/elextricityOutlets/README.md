## Problem Description:
Desks are arranged in a line, with a distance of 1 unit between each desk.
You need to connect every desk to electricity by installing outlets.
Outlets can only be placed on desks marked with a "1" in an array, meaning outlets can be installed there. Desks marked with a "0" cannot have outlets installed.
The outlets can distribute electricity to adjacent desks within a distance specified by the first element of the array (k = arr[0]).
You are required to determine the minimum number of outlets needed to connect all desks. If it's impossible to connect all desks, return -1.
### Input:
The input is an array arr where:
arr[0] is the length k, which represents the range each outlet can cover.
The rest of the array elements (arr[1], arr[2], ..., arr[n-1]) represent whether a desk can have an outlet (1) or not (0).
### Output
Minimum amount of electricity outlets or if it's not possible to connect all devices then -1