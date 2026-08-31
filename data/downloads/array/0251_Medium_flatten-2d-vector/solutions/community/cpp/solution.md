# 7-9 lines added, Java and C++, O(1) space.

**Author:** StefanPochmann
**Votes:** 173
**Link:** [https://leetcode.com/problems/flatten-2d-vector/solutions/67652/](https://leetcode.com/problems/flatten-2d-vector/solutions/67652/)

---

Since the OJ does `while (i.hasNext()) cout << i.next();`, i.e., always calls `hasNext` before `next`, I don't really have to call it myself so I could save that line in `next`. But I think that would be bad, we shouldn't rely on that.

**C++**

    class Vector2D {
        vector<vector<int>>::iterator i, iEnd;
        int j = 0;
    public:
        Vector2D(vector<vector<int>>& vec2d) {
            i = vec2d.begin();
            iEnd = vec2d.end();
        }
    
        int next() {
            hasNext();
            return (*i)[j++];
        }
    
        bool hasNext() {
            while (i != iEnd && j == (*i).size())
                i++, j = 0;
            return i != iEnd;
        }
    };

**Java**

    public class Vector2D {
    
        private Iterator<List<Integer>> i;
        private Iterator<Integer> j;
    
        public Vector2D(List<List<Integer>> vec2d) {
            i = vec2d.iterator();
        }
    
        public int next() {
            hasNext();
            return j.next();
        }
    
        public boolean hasNext() {
            while ((j == null || !j.hasNext()) && i.hasNext())
                j = i.next().iterator();
            return j != null && j.hasNext();
        }
    }