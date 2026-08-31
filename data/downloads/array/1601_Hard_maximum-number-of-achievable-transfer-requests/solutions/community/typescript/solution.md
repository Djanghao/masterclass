# Easy recursive Solution 🔥 || With comments for each logic

**Author:** Atanu_200
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximum-number-of-achievable-transfer-requests/solutions/3708486/](https://leetcode.com/problems/maximum-number-of-achievable-transfer-requests/solutions/3708486/)

---

# Intuition
The given code is a recursive solution to find the maximum number of successful requests that can be accommodated based on the available spaces in different buildings.

# Approach
1. The `maximumRequests` function initializes an array called `spaces` with `n` elements, representing the number of buildings. Each element is initially set to 0, indicating no available space.

2. It calls the `getMaxReq` function, passing the initial parameters: `ind` (starting index), `requests` (the input array of requests), `spaces` array, and `countOfSuccessfulReq` (the count of successful requests).

3. The `getMaxReq` function is a recursive function that uses Backtracking to explore different combinations of accepting or rejecting requests.

4. The base case is when `ind` equals the length of the `requests` array, indicating that all requests have been processed.

5. Inside the base case, it checks if all elements in the `spaces` array are `0`. If they are, it means all requests have been successfully accommodated, so it returns `countOfSuccessfulReq`.

6. The recursive part begins by taking the current request from the `requests` array and updating the `spaces` array accordingly.

7. It then recursively calls `getMaxReq` for the next index (`ind + 1`) while incrementing `countOfSuccessfulReq` by 1 to simulate accepting the request.

8. After the recursive call, it reverts the changes made to the `spaces` array to simulate not accepting the request.

9. It recursively calls `getMaxReq` again for the next index (`ind + 1`) while keeping `countOfSuccessfulReq` unchanged to simulate not accepting the request.

10. Finally, it returns the maximum value between the results of accepting the request (`taken`) and not accepting the request (`notTaken`).

# Complexity
- Exponential Time complexity: $$O(2^N)$$

- Space complexity: $$O(N)$$


# Javascript Code
```
function maximumRequests(n, requests){

    // Initially for all buildings we will have 0 space
    const spaces = new Array(n).fill(0);
    return getMaxReq(0, requests, spaces, 0);
};

function getMaxReq(ind, req, spaces, countOfSuccessfulReq){
    if (ind === req.length) {
        // if any building have no extra spaces
        // means we can accept the request count
        // otherwise not accepting at all
        for(let space of spaces){
            if(space !== 0) return 0
        }
        return countOfSuccessfulReq;
    }

    const [from, to] = req[ind];
    spaces[from]--;
    spaces[to]++;
    // try by accepting the request
    const taken = getMaxReq(ind + 1, req, spaces, countOfSuccessfulReq + 1);
    spaces[from]++;
    spaces[to]--;
    // try by not accepting the request
    const notTaken = getMaxReq(ind + 1, req, spaces, countOfSuccessfulReq);
    return Math.max(notTaken, taken);
}
```

---

# Typescript Code
```
function maximumRequests(n: number, requests: number[][]): number {

    // Initially for all buildings we will have 0 space
    const spaces: number[] = new Array(n).fill(0);
    return getMaxReq(0, requests, spaces, 0);
};

function getMaxReq(ind: number, req: number[][], spaces: number[], countOfSuccessfulReq: number): number {
    if (ind === req.length) {
        // if any building have no extra spaces
        // means we can accept the request count
        // otherwise not accepting at all
        for(let space of spaces){
            if(space !== 0) return 0
        }
        return countOfSuccessfulReq;
    }

    const [from, to] = req[ind];
    spaces[from]--;
    spaces[to]++;
    // try by accepting the request
    const taken = getMaxReq(ind + 1, req, spaces, countOfSuccessfulReq + 1);
    spaces[from]++;
    spaces[to]--;
    // try by not accepting the request
    const notTaken = getMaxReq(ind + 1, req, spaces, countOfSuccessfulReq);
    return Math.max(notTaken, taken);
}
```