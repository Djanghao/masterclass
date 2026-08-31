# O(n) solution w/ explanation

**Author:** waiting13
**Votes:** 1
**Link:** [https://leetcode.com/problems/permutation-sequence/solutions/3085034/](https://leetcode.com/problems/permutation-sequence/solutions/3085034/)

---

# Intuition
Take n=3 as an example.
There are 3! permuatation which are [123,132,213,231,312,321].
As we can see there are 2 permutations start with "1".
There are also 2 permutations start with "2" and start with "2".

We can look at the n-permuation formula to get some insight:
$$ n! = n \\cdot (n-1)! = (n-1)! \\cdot n $$
The formula means we have n possibilities to choose 1st element. And if this is chosen, we still need to permutate remaining (n-1) elements; there are (n-1)! possiblities of permutatation of (n-1) elements.

In other word, there are (n-1)! permutations start with 1, with 2, with 3 etc.

# Recursive Approach 
## The centre of the problem is to locate 1st element of the permutation (or sub-permutation) 

Assume index is in $$ \\left \\{  0,1,...,n! - 1\\right \\} $$.

**Case 1. index = 0:**
We just return the sorted numbers;

**Case 2. index > 0**

The problem becomes finding the position of 1st element of the permutation from the sorted numbers (i.e. 1..=n).

As we see, there are (n-1)! permutations start with some element. 
Thus, the element we want to find is in position $$ \\left \\lfloor  \\frac{index}{(n-1)!} \\right \\rfloor $$ in sorted array.

For the permutation of remaining (n-1) elements, the index for this sub-permutation will be $$ \	ext{index} \\mod (n-1)! $$ because *divisor * quotient + remainder*. 

Therefore, we can use the same method for (n-1) elements with $$ index' = index \\mod (n-1)!$$

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
impl Solution {
    fn fact(n: usize) -> usize{
        if n <= 1 {
            return 1;
        }
        let mut value = 1;
        for i in 2..=n{
            value*=i;
        }
        return value;
    }

    fn dfs( choice : Vec<usize>, index: usize) -> String{

        if choice.is_empty() {
            return String::from("");
        }

        if index == 0 {
            return choice.into_iter().map(|x| x.to_string()).collect::<String>();
        }

        let mut choice = choice;
        let group_size = Solution::fact(choice.len() - 1);
        let group_index = index / group_size;
        let subgroup_index = index % group_size;

        let left = choice.remove(group_index).to_string();
        let right = Solution::dfs(choice,subgroup_index);

        return [left, right].join("");

    }

    pub fn get_permutation(n: i32, k: i32) -> String{
        let n = n as usize;
        let k = k as usize;
        let mut choice = (1..=n).collect::<Vec<usize>>();
        return Solution::dfs(choice, k - 1);
    }
}
```