# C# BitArray

**Author:** anand9589
**Votes:** 5
**Link:** [https://leetcode.com/problems/design-hashset/solutions/3577084/](https://leetcode.com/problems/design-hashset/solutions/3577084/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
public class MyHashSet
        {
            BitArray arr;

            public MyHashSet()
            {
                arr = new BitArray(1000001);
            }

            public void Add(int key)
            {
                arr[key] = true;
            }

            public void Remove(int key)
            {
                arr[key] = false;
            }

            public bool Contains(int key)
            {
                return arr[key];
            }
        }

        /**
         * Your MyHashSet object will be instantiated and called as such:
         * MyHashSet obj = new MyHashSet();
         * obj.Add(key);
         * obj.Remove(key);
         * bool param_3 = obj.Contains(key);
         */
```