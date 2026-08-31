# Step-By-Step Intuition with Clean Code [C++ / Java / Rust]

**Author:** ashutosh2706
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimize-or-of-remaining-elements-using-operations/solutions/4837196/](https://leetcode.com/problems/minimize-or-of-remaining-elements-using-operations/solutions/4837196/)

---

# Approach
**Greedy :** 
1. Making MSB 0, has more impact on the resulting answer, than making any subsequent bits to 0. (1000000 > 0111111).
2. Suppose the `OR` of all the elements is (1001101). Our goal is to minimize this. How ? , try to make each bit (MSB=>LSB) 0.
3. Suppose if the i-th bit is set in our answer, then at least one of the numbers in nums array has i-th bit set.
4. We can do this by `AND`ing the adjacent elements in nums array. 
    If at least one number has i-th bit unset, then we can unset the i-th bit in our final answer. All we have to check, if the i-th bit can be unset within `k` operations.
    Ex. `[1,1,1,1,0,1]` this will take 5 operations to make it 0.
5. If we can unset the i-th bit within k-operations, add this bit to an integer variable `can_be_set`. Further every bits that can be unset, will be added to it. `can_be_set |= (1 << i);`
6. Otherwise if we cannot unset it within `k` operations, add to another variable `cannot_be_set`. And our final answer will definitely contain all those bits which can't be unset. So `cannot_be_set` will be our final answer.

7. So one might think like, okay, for each of the ith-bit from (MSB=>LSB) i will go on each number and count the number of set bits. (bcz. the no of set bits is the no. of operations required to make it 0) and check if it's less than `k`. 
8. But the thing is, if suppose we can unset the 29th bit within `k` operations, we will add 29th bit to our `can_be_set` variable. Next if we try to unset the further bits, we have to consider that **current bit + previous all bits that were unset**. (which is given by `can_be_set`).
9. So iterate over each element in nums array while doing the `AND` of them, and check if the **current_bit + previous unset bits are all 0** or not. This can be done by `(AND of numbers) & (can_be_set | (1 << current_bit)) == 0`. And within `k` operations. If it is, add this bit to `can_be_set` otherwise to `cannot_be_set`.
10. Checking if the operation is done within K operations is simple algorithm.
    ```
    val = 0, cnt = 0
    For each num [0...n] in nums:
        if(val == 0) : val = num
        else : val &= num
        if(val & (can_be_set | (1 << current_bit))) : ++cnt
        else val = 0

    check(cnt <= K)
    ```

11. Return `cannot_be_set` as answer.

# Code [C++]
```
*/
class Solution {
public:
    int minOrAfterOperations(vector<int>& nums, int k) {
        
        int can_be_set = 0, cannot_be_set = 0;
        for(int bit=29; bit>=0; --bit) {

            int val = 0, target = can_be_set | (1 << bit);
            int operations = 0;

            for(auto& num : nums) {
                if(val == 0) val = num;
                else val &= num;
                if(val & target) operations++;
                else val = 0;
            }

            if(operations > k) cannot_be_set |= (1 << bit);
            else can_be_set |= (1 << bit);
        }

        return cannot_be_set;
    }
};
```

# Code [Rust]
```
impl Solution {
    pub fn min_or_after_operations(nums: Vec<i32>, k: i32) -> i32 {
        let mut can_be_set = 0;
        let mut cannot_be_set = 0;
        
        for bit in (0..=29).rev() {
            let mut val = 0;
            let target = can_be_set | (1 << bit);
            let mut operations = 0;

            for &num in nums.iter() {
                if val == 0 {
                    val = num;
                } else {
                    val &= num;
                }
                if val & target != 0 {
                    operations += 1;
                } else {
                    val = 0;
                }
            }

            if operations > k {
                cannot_be_set |= 1 << bit;
            } else {
                can_be_set |= 1 << bit;
            }
        }
        
        cannot_be_set
    }
}
``` 

# Code [Java]

```
class Solution {
    public int minOrAfterOperations(int[] nums, int k) {
        int can_be_set = 0;
        int cannot_be_set = 0;
        for (int bit = 29; bit >= 0; bit--) {
            int val = 0;
            int target = can_be_set | (1 << bit);
            int operations = 0;

            for (int num : nums) {
                if (val == 0) {
                    val = num;
                } else {
                    val &= num;
                }
                if ((val & target) != 0) {
                    operations++;
                } else {
                    val = 0;
                }
            }

            if (operations > k) {
                cannot_be_set |= (1 << bit);
            } else {
                can_be_set |= (1 << bit);
            }
        }

        return cannot_be_set;
    }
}
```