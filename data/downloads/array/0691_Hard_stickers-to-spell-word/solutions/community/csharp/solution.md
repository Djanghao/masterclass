# BFS with state update

**Author:** linda2024
**Votes:** 0
**Link:** [https://leetcode.com/problems/stickers-to-spell-word/solutions/5840753/](https://leetcode.com/problems/stickers-to-spell-word/solutions/5840753/)

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
```csharp []
public class Solution {
    private bool IsDominated(string a, string b)
    {
        int[] sampleA = new int[26], sampleB = new int[26];
        foreach(char c in a)
        {
            sampleA[c-'a']++;
        }

        foreach(char c in b)
        {
            sampleB[c-'a']++;
        }

        for(int i = 0; i < 26; i++)
        {
            if(sampleA[i] < sampleB[i])
                return false;
        }

        return true;
    }

    private string[] FilterSticker(string[] stickers, string target)
    {
        List<string> res = new List<string>();
        HashSet<char> hSet = new HashSet<char>(target);
        for(int i = 0; i < stickers.Length; i++)
        {
            string tmp = "";
            foreach(char c in stickers[i])
            {
                if(hSet.Contains(c))
                    tmp += c;
            }

            if(tmp.Length > 0)
            {
                bool isDominated = false;
                foreach(string pre in res)
                {
                    if(IsDominated(pre, tmp))
                    {
                        isDominated = true;
                        break;
                    }
                }

                if(!isDominated)
                    res.Add(tmp);
            }
        }

        return res.ToArray();
    }


    public int MinStickers(string[] stickers, string target) {
       int len = target.Length, states = 1 << len;

       stickers = FilterSticker(stickers, target);
        List<int>[] targetIdx = new List<int>[26];

        for(int i = 0; i < 26; i++)
        {
            targetIdx[i] = [];
        }

        for(int i = 0; i < len; i++)
        {
            targetIdx[target[i]-'a'].Add(i);
        }

        bool[] visited = new bool[states];
        Queue<int> que = new Queue<int>();
        int res = 0;
        que.Enqueue(0);

        while(que.Count > 0)
        {
            int size = que.Count;
            for(int i = 0; i < size; i++)
            {
                var state = que.Dequeue();
                foreach(var sticker in stickers)
                {
                    var newState = state;
                    foreach(char c in sticker)
                    {
                        foreach(int idx in targetIdx[c-'a'])
                        {
                            if((newState >> idx & 1) == 0)
                            {
                                newState |= 1 << idx;
                                break;
                            }
                        }
                    }

                    if(!visited[newState])
                    {
                        visited[newState] = true;
                        if(newState == states-1)
                            return res+1;

                        que.Enqueue(newState);
                    }
                }
            }

            res++;
        }

        return -1;
    }
}
```