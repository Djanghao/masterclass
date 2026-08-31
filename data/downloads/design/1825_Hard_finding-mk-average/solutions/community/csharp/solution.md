# 3 Sorted collections approach in C#

**Author:** artbidn
**Votes:** 1
**Link:** [https://leetcode.com/problems/finding-mk-average/solutions/4916476/](https://leetcode.com/problems/finding-mk-average/solutions/4916476/)

---

# Intuition

We need to maintain 3 sorted sequences. 

The tricky part is, there is no good way to represent sorted Sequences in C#, so we will create one.

# Approach

One thing should be obvious. At first, we are just adding elements to a sequence, but eventually we first need to 'pop' the oldest adding element. You can either use Queue or LinkedList or circle array implementation, whatever you find easiest.

Removing an element procedure:
1. Find a collection with the element and delete the element from it.
2. Rebalance the left collection to contain k elements and mid collection to contain m - 2 * k elements. The right collection will then always end up with k elements.

Adding an element procedure: 

1. Add to the left.
2. If left size is larger than k, move largest element to mid
3. If mid dize is larger than m - 2 * k, move largest element to right.

Whenever an element enters or leaves the mid collection, we add/subtract its value from the sum.

In C#, SortedSet is nice because it has O(1) Min/Max fields. But it can only contain unique elements.

To mitigate that, we can combine it with a Dictionary to keep track of element counts.  

# Code
```
public class MKAverage {

    public MKAverage(int m, int k) {
        this.m = m;
        this.k = k;

        midSize = m - 2 * k;
        window = new int[m];
        index = 0;
        left = new CustomSortedList();
        mid = new CustomSortedList();
        right = new CustomSortedList();
    }
    
    public void AddElement(int num) {
        var realIndex = index % m;
        if (index >= m) {
            var old = window[realIndex];
            Remove(old);
        }

        Add(num);
        window[realIndex] = num;
        index++;
    }

    private void Remove(int n) {
        if (n <= left.Max) {
            left.Remove(n);
        }
        else if (n <= mid.Max) {
            mid.Remove(n);
            sum -= n;
        }
        else {
            right.Remove(n);
        }

        if (left.Count < k) {
            var moved = Move(mid, left, true);
            sum -= moved;
        }

        if (mid.Count < midSize) {
            var moved = Move(right, mid, true);
            sum += moved;
        }
    }

    private int Move(CustomSortedList from, CustomSortedList to, bool min) {
        var n = min ? from.Min : from.Max;
        from.Remove(n);
        to.Add(n);
        return n; 
    }

    private void Add(int n) {
        left.Add(n);

        if (left.Count > k) {
            var moved = Move(left, mid, false);
            sum += moved;
        }

        if (mid.Count > midSize) {
            var moved = Move(mid, right, false);
            sum -= moved;
        }
    }
    
    public int CalculateMKAverage() {
        return (index < m) ? -1 : sum / midSize; 
    }

    private int midSize;
    private int index;
    private int[] window;
    private int sum;

    private CustomSortedList left;
    private CustomSortedList mid;
    private CustomSortedList right;

    private class CustomSortedList {
        public CustomSortedList() {
            counts = new Dictionary<int, int>();
            set = new SortedSet<int>();
        }

        public void Add(int n) {
            if (counts.ContainsKey(n)) {
                counts[n]++;
            }
            else {
                counts[n] = 1;
                set.Add(n);
            }

            Count++;
        }

        public void Remove(int n) {
            if (!counts.TryGetValue(n, out var count)) {
                return;
            }

            if (count > 1) {
                counts[n] -= 1;
            }
            else {
                counts.Remove(n);
                set.Remove(n);
            }

            Count--;
        }

        public int Count {get; private set; } 

        public int Max => set.Max;
        public int Min => set.Min;

        private Dictionary<int, int> counts;
        private SortedSet<int> set;
    }

    private int m;
    private int k;
}

```