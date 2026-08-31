# My Calendar III

**Author:** anand9589
**Votes:** 1
**Link:** [https://leetcode.com/problems/my-calendar-iii/solutions/2670632/](https://leetcode.com/problems/my-calendar-iii/solutions/2670632/)

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

        public class MyCalendarThree
        {
            SortedDictionary<int, int> values;
            public MyCalendarThree()
            {
                values = new SortedDictionary<int, int>();
            }

            public int Book(int start, int end)
            {
                int currBooking = 0;
                int maxBooking = 0;
                if (values.ContainsKey(start))
                {
                    values[start]++;
                }
                else
                {
                    values.Add(start, 1);   
                }

                if (values.ContainsKey(end))
                {
                    values[end]--;
                }
                else
                {
                    values.Add(end, -1);
                }

                foreach (int t in values.Values)
                {
                    currBooking += t;
                    maxBooking = Math.Max(maxBooking, currBooking);
                }

                return maxBooking;
            }
        }
/**
 * Your MyCalendarThree object will be instantiated and called as such:
 * MyCalendarThree obj = new MyCalendarThree();
 * int param_1 = obj.Book(start,end);
 */
```