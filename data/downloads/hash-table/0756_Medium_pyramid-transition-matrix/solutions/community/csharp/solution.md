# C# simple solution

**Author:** lyudmil
**Votes:** 0
**Link:** [https://leetcode.com/problems/pyramid-transition-matrix/solutions/4741695/](https://leetcode.com/problems/pyramid-transition-matrix/solutions/4741695/)

---

# Code
```
public class Solution {
    public bool PyramidTransition(string bottom, IList<string> allowed) {
        var dict = new Dictionary<string, IList<char>>();

        // Create a dictionary with the first to characters being the key and list of
        // possible third characters.
        foreach (var str in allowed) {
            var key = str[0].ToString() + str[1].ToString();
            if (dict.ContainsKey(key))
                dict[key].Add(str[2]);
            else {
                dict.Add(key, new List<char>() { str[2] });
            }
        }

        return Helper(bottom, dict);
    }

    private bool Helper(string bottom, Dictionary<string, IList<char>> dict) {
        if (bottom.Length == 2)
            return dict.ContainsKey(bottom);

        // Get all possible top rows.
        var list = new List<string>();
        GetTop(list, bottom, "", dict, 0);

        // If there are no possible top rows return false;
        if (list.Count == 0)
            return false;

        foreach (var str in list) {
            if (Helper(str, dict))
                return true;
        }

        return false;
    }

    private void GetTop(IList<string> list, string bottom, string top, Dictionary<string, IList<char>> dict, int index) {
        if (index == bottom.Length - 1) {
            if (top != "") list.Add(top);
            return;
        }

        var current = bottom[index].ToString() + bottom[index + 1].ToString();
        if (dict.ContainsKey(current)) {
            foreach (var ch in dict[current]) {
                GetTop(list, bottom, top + ch.ToString(), dict, index + 1);
            }
        }
    }
}
```