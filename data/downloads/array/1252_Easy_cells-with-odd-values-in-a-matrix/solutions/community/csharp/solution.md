# C#  80 ms, faster than 99%

**Author:** fkaracan
**Votes:** 1
**Link:** [https://leetcode.com/problems/cells-with-odd-values-in-a-matrix/solutions/1960916/](https://leetcode.com/problems/cells-with-odd-values-in-a-matrix/solutions/1960916/)

---

```
        public static int OddCells(int m, int n, int[][] indices)
        {
            int[,] arr = new int[m, n];

            int result = 0;

            foreach (var indice in indices)
            {
                for (int i = 0; i < n; i++)
                {
                    arr[indice[0], i]++;
                }

                for (int j = 0; j < m; j++)
                {
                    arr[j, indice[1]]++;
                }
            }


            foreach (var item in arr)
            {
                if (item % 2 == 1) result++;
            }

            return result;
        }
```