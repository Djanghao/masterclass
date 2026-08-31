# Recursive solution beats 100%

**Author:** dikla600
**Votes:** 0
**Link:** [https://leetcode.com/problems/iterator-for-combination/solutions/5994484/](https://leetcode.com/problems/iterator-for-combination/solutions/5994484/)

---

# Intuition
Recursive solution

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```csharp []
public class CombinationIterator {

   List<string> list = new List<string>();
        int iter = 0;

        public CombinationIterator(string characters, int combinationLength)
        {

            BuildList(list, characters, combinationLength, "", 0);

        }

        private void BuildList(List<string> list, string characters, int combinationLength, string current, int indexcurrent)
        {


            if (current.Length == combinationLength)
            {
                list.Add(current);
                return;
            }


            for (int i = indexcurrent; i < characters.Length; i++)
            {

                BuildList(list, characters, combinationLength, current + characters[i], i+1);
            }




        }

        public string Next()
        {

            var res = list[iter];
            iter++;
            return res;

        }

        public bool HasNext()
        {

            if (iter < list.Count())
            {
                return true;
            }
            return false;
        }
}

/**
 * Your CombinationIterator object will be instantiated and called as such:
 * CombinationIterator obj = new CombinationIterator(characters, combinationLength);
 * string param_1 = obj.Next();
 * bool param_2 = obj.HasNext();
 */
```