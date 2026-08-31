# Share my AC C++ solution, around 50ms, O(N*N), with explanation and comments

**Author:** kun596
**Votes:** 1376
**Link:** [https://leetcode.com/problems/3sum/solutions/7402/](https://leetcode.com/problems/3sum/solutions/7402/)

---

the key idea is the same as the `TwoSum` problem. When we fix the `1st` number, the `2nd` and `3rd` number can be found following the same reasoning as `TwoSum`. 

The only difference is that, the `TwoSum` problem of LEETCODE has a unique solution. However, in `ThreeSum`, we have multiple duplicate solutions that can be found. Most of the OLE errors happened here because you could've ended up with a solution with so many duplicates.

The naive solution for the duplicates will be using the STL methods like below :


    std::sort(res.begin(), res.end());
    res.erase(unique(res.begin(), res.end()), res.end());


But according to my submissions, this way will cause you double your time consuming almostly.

A better approach is that, to jump over the number which has been scanned, no matter it is part of some solution or not.

If the three numbers formed a solution, we can safely ignore all the duplicates of them.

We can do this to all the three numbers such that we can remove the duplicates. 

Here's my AC C++ Code:


    vector<vector<int> > threeSum(vector<int> &num) {
        
        vector<vector<int> > res;

        std::sort(num.begin(), num.end());

        for (int i = 0; i < num.size(); i++) {
            
            int target = -num[i];
            int front = i + 1;
            int back = num.size() - 1;

            while (front < back) {

                int sum = num[front] + num[back];
                
                // Finding answer which start from number num[i]
                if (sum < target)
                    front++;

                else if (sum > target)
                    back--;

                else {
                    vector<int> triplet = {num[i], num[front], num[back]};
                    res.push_back(triplet);
                    
                    // Processing duplicates of Number 2
                    // Rolling the front pointer to the next different number forwards
                    while (front < back && num[front] == triplet[1]) front++;

                    // Processing duplicates of Number 3
                    // Rolling the back pointer to the next different number backwards
                    while (front < back && num[back] == triplet[2]) back--;
                }
                
            }

            // Processing duplicates of Number 1
            while (i + 1 < num.size() && num[i + 1] == num[i]) 
                i++;

        }
        
        return res;
        
    }