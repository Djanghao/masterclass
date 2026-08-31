# C# || Most Popular Video Creator || Easy || Fast

**Author:** gamdevAbhi
**Votes:** 1
**Link:** [https://leetcode.com/problems/most-popular-video-creator/solutions/3326180/](https://leetcode.com/problems/most-popular-video-creator/solutions/3326180/)

---

# Approach:
The Code is self-explanatory.

# Code
```
public class Solution {
    public IList<IList<string>> MostPopularCreator(string[] creators, string[] ids, int[] views) 
    {
        IList<IList<string>> answer = new List<IList<string>>();
        Dictionary<string, Creator> creatorList = new Dictionary<string, Creator>();
        long highestView = 0;

        for(int i = 0; i < ids.Length; i++)
        {
            if(creatorList.ContainsKey(creators[i]) == false)
            {
                creatorList.Add(creators[i], new Creator());
            }

            long view = creatorList[creators[i]].FindHiggest(ids[i], views[i]);

            if(view > highestView) highestView = view;
        }

        foreach(KeyValuePair<string, Creator> pair in creatorList)
        {
            if(pair.Value.totalView == highestView)
            {
                IList<string> info = new List<string>();
                info.Add(pair.Key);
                info.Add(pair.Value.highestID);

                answer.Add(info);
            }
        }

        return answer;
    }

    public class Creator
    {
        public long highestView = -1;
        public string highestID;
        public long totalView = 0;

        public long FindHiggest(string id, int view)
        {
            if(view > highestView || (view == highestView && string.Compare(id, highestID) == -1))
            {
                highestView = view;
                highestID = id;
            }

            totalView += view;

            return totalView;
        }
    }
}
```