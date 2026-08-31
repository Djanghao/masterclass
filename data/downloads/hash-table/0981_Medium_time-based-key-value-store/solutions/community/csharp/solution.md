# Beat +98% by partition, no assumption on monotonic timestamps

**Author:** boliu5423
**Votes:** 2
**Link:** [https://leetcode.com/problems/time-based-key-value-store/solutions/2951359/](https://leetcode.com/problems/time-based-key-value-store/solutions/2951359/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The problem is asking to store values associated with a given key and return the value ordered by timestamps.
So the most intuitive way to tackle this problem is firstly hashing the values by keys, and inside the values of each key, sort them in order to perform binary search for the efficiency of Get. To further optimize, we can divide the values by the range of timestamps with a pre-defined bucket size. So that we only need to binary search values falling into the same bucket(constant size).

# Approach
<!-- Describe your approach to solving the problem. -->
Create a data structure HashMap<string, List<(int, string[])>> map.
For Set, firstly we find the List(i.e. map[key]), then we find the index of the timestamp within the List by binary search, and lastly write the value to the array(same value could be overwritten).
As to Get, firstly we find the List by key, then we find the index of the timestamp within the List by binary search, lastly return the last value that is smaller or equal to the timestamp.

# Complexity
Assuming Set are called S times and Get are called G times.
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
   Set: O(S * log'S), for each individual Set, finding the List takes constant time, binary search(worst case: all values fall in same bucket) takes log'S, writing value to array is constant time.
   Get: O(G * log'S), for each individual Get, finding the List takes constant time, binary search takes log'S and searching value in array takes constant time(given the array size is a pre-defined number).
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(S*sizeof(array)) = O(S), for each key + timestamp pair, there will be at most a single array(fixed size) created.
# Code
```
        public class TimeMap
        {
            const int BucketSize = 100;

            private Dictionary<string, List<(int, string[])>> key2Values;

            private MyComparer comparer = new MyComparer();

            public TimeMap()
            {
                this.key2Values = new Dictionary<string, List<(int, string[])>>();
            }

            public void Set(string key, string value, int timestamp)
            {
                int bucketId = timestamp / BucketSize;
                int index = timestamp % BucketSize;
                if (!this.key2Values.TryGetValue(key, out List<(int, string[])> buckets))
                {
                    buckets = new List<(int, string[])>();
                    this.key2Values.Add(key, buckets);
                }

                string[] values = null;
                var pos = buckets.BinarySearch((bucketId, null), this.comparer);
                if (pos < 0)
                {
                    pos = ~pos;
                    values = new string[BucketSize];
                    values[index] = value;
                    buckets.Insert(pos, (bucketId, values));
                }
                else
                {
                    values = buckets[pos].Item2;
                    values[index] = value;
                }
            }

            public string Get(string key, int timestamp)
            {
                if (!this.key2Values.TryGetValue(key, out List<(int, string[])> buckets))
                {
                    return string.Empty;
                }

                int bucketId = timestamp / BucketSize;
                int index = timestamp % BucketSize;
                var pos = buckets.BinarySearch((bucketId, null), this.comparer);
                if (pos < 0)
                {
                    if (bucketId == 0)
                        return string.Empty;

                    pos = ~pos;
                    return buckets[pos - 1].Item2.Last(val => !string.IsNullOrEmpty(val));
                }
                else
                {
                    var values = buckets[pos].Item2;
                    for (int i = index; i >= 0; --i)
                    {
                        if (values[i] != null)
                            return values[i];
                    }

                    return string.Empty;
                }
            }
        }

        public class MyComparer : IComparer<(int, string[])>
        {
            public int Compare((int, string[]) x, (int, string[]) y)
            {
                return x.Item1 - y.Item1;
            }
        }

/**
 * Your TimeMap object will be instantiated and called as such:
 * TimeMap obj = new TimeMap();
 * obj.Set(key,value,timestamp);
 * string param_2 = obj.Get(key,timestamp);
 */
```