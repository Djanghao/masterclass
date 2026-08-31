# [C#] Solution optimized to faster runtime by having extra space

**Author:** gokulprasad1987
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-total-damage-with-spell-casting/solutions/5397392/](https://leetcode.com/problems/maximum-total-damage-with-spell-casting/solutions/5397392/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
1. DP problem - Build up solution from the lower powers till the higher power
2. Moving back the input array to find the prev applicable power (Max value lesser than power-2) - Got TimeLimitExceeded error
3. Created a class to store the unique values to avoid traversing same value multiple times

# Approach
<!-- Describe your approach to solving the problem. -->
1. Array sort
2. Transform the array to unique values with count for each value
3. DP: 
    - Find the prev applicable power (Max value lesser than power-2)
    - Calculate currentSum
    - Store the max of currentSum vs Sum of currnode-1
4. Return the maxSum stored in the last node

# Complexity
- Time complexity: O(NlogN)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
ArraySort : O(NlogN)
UniqueValueArray: O(N)
DP: O(M) M:Length of uniqueValueArray

- Space complexity: O(M) M: length of unique value array
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

![image.png](./images/0.png)


# Code
```
public class Solution {
    public class ValNode
    {
        public int val;
        public int count;
        public long maxValTillNode;

        public ValNode(int v, int c = 1)
        {
            this.val = v;
            this.count = c;
        }
    }

public long MaximumTotalDamage(int[] power)
    {
        int n = power.Length;
        long maxWithCurrIndex;

        // Step1: Sort the array
        Array.Sort(power);

        // Step2: Compress to unique values
        List<ValNode> nodes = new List<ValNode>();
        ValNode currNode = new ValNode(power[0]);
        nodes.Add(currNode);
        int prevPower = power[0];

        for (int i = 1; i < n; i++)
        {
            if (prevPower == power[i])
            {
                currNode.count++;
            }
            else
            {
                currNode = new ValNode(power[i]);
                nodes.Add(currNode);
            }

            prevPower = power[i];
        }

        // Step3: DP find the max val till the node
        long currSum; int j;
        for (int i = 0; i < nodes.Count; i++)
        {
            currSum = (long)nodes[i].count * nodes[i].val;
            j = i - 1;

            while (j >= 0)
            {
                if (nodes[j].val + 1 == nodes[i].val || nodes[j].val + 2 == nodes[i].val)
                {
                    j--;
                }
                else
                {
                    break;
                }
            }

            maxWithCurrIndex = currSum + (j >= 0 ? nodes[j].maxValTillNode : 0);
            nodes[i].maxValTillNode = long.Max(maxWithCurrIndex, i > 0 ? nodes[i - 1].maxValTillNode : maxWithCurrIndex);
        }

        // Step4: Return the max value of the last node
        return nodes[nodes.Count - 1].maxValTillNode;
    }
}
```