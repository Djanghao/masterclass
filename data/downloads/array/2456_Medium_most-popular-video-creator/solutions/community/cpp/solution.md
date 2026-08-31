# why leetcode why ? 🥹🥲

**Author:** HarshitMaurya
**Votes:** 41
**Link:** [https://leetcode.com/problems/most-popular-video-creator/solutions/2758012/](https://leetcode.com/problems/most-popular-video-creator/solutions/2758012/)

---

# *The question was in the contest just to consume time*

Note : Solution added Below

![](./images/0.gif)



**Solution 1 :** ***Using 3 Maps***
```
class Solution {

    public List<List<String>> mostPopularCreator(String[] creators, String[] ids, int[] views) {
        HashMap<String, Long> map_max = new HashMap<>(); //count maximum score
        HashMap<String, Integer> map = new HashMap<>();  //count totle score
        HashMap<String, ArrayList<Pair>> id = new HashMap<>(); //store ids in order with their views
        List<List<String>> ans = new ArrayList<>();
        long max = 0;
        for (int i = 0; i < views.length; i++) {
            if (!map.containsKey(creators[i])) map.put(creators[i], 0);
            if (!id.containsKey(creators[i])) id.put(creators[i], new ArrayList<>());
            if (!map_max.containsKey(creators[i])) map_max.put(creators[i], (long) 0);
			
			
            map.put(creators[i], map.get(creators[i]) + views[i]); //calculate score
            id.get(creators[i]).add(new Pair(ids[i], views[i]));
            map_max.put(creators[i], Math.max(map_max.get(creators[i]), views[i])); //store max score

        }
        for (long num : map.values()) {
            max = Math.max(max, num);
        }
        ArrayList<Pair> list = new ArrayList<>();

        for (String key : map.keySet()) {
            if (map.get(key) == max) {
                Collections.sort(id.get(key), (o1, o2) -> (o1.str.compareTo(o2.str))); //sort by lexicographical order
                for (Pair p : id.get(key)) {
                    if (p.num == map_max.get(key)) {
                        ans.add(new ArrayList<>(Arrays.asList(key, p.str)));
                        break;
                    }
                }
            }
        }


        return ans;
    }
	
    class Pair {
        String str;
        long num;
        Pair(String s, long n) {
            str = s;
            num = n;
        }
    }

}

```

**Solution 2 :** ***Using 2 Maps***

*credit : @skate1512*

```
class Solution
{
    public:
        vector<vector < string>> mostPopularCreator(vector<string> &creators, vector<string> &ids, vector< int > &views)
        {
            int n = creators.size();
            unordered_map<string, long long > creatorViews;
            unordered_map<string, pair<int, string>> creatorMinID;
            long long mxViews = 0;
            for (int i = 0; i < n; i++)
            {
                creatorViews[creators[i]] += views[i];
                if (creatorMinID.count(creators[i]))
                {
                    if (creatorMinID[creators[i]].first == views[i])
                    {
                        creatorMinID[creators[i]].second = min(creatorMinID[creators[i]].second, ids[i]);
                    }
                    else if (creatorMinID[creators[i]].first < views[i])
                        creatorMinID[creators[i]] = { views[i],
                            ids[i]
                        };
                }
                else
                {
                    creatorMinID[creators[i]] = { views[i],
                        ids[i]
                    };
                }
                mxViews = max(mxViews, creatorViews[creators[i]]);
            }
            vector<vector < string>> res;
            for (auto p: creatorViews)
            {
                if (p.second == mxViews)
                {
                    res.push_back({ p.first,
                        creatorMinID[p.first].second });
                }
            }
            return res;
        }
};
```

**Solution 3 :** ***Using 1 Map***

*credit : @dvisp*

```
struct video
{
    long sum = 0;
    string small;
    int max_view = 0;
};

vector<vector < string>> mostPopularCreator(vector<string> &c, vector<string> &ids, vector< int > &views)
{
    unordered_map<string, video> mp;
    long count = 0;

    for (int i = 0; i < size(c); i++)
    {
       	// Check if creator present or not
        if (!mp.count(c[i]))
        {
            mp[c[i]] = { views[i],
                ids[i],
                views[i]
            };
            count = max(count, mp[c[i]].sum);
            continue;
        }

       	// If already present, update all parameters as said in above algorithm
        mp[c[i]].sum += views[i];
        if (mp[c[i]].max_view < views[i] || mp[c[i]].max_view == views[i] && ids[i] < mp[c[i]].small)
        {
            mp[c[i]].max_view = views[i];
            mp[c[i]].small = ids[i];
        }

        count = max(count, mp[c[i]].sum);
    }

   	//extract words with highest count of views
    vector<vector < string>> ans;
    for (auto &r: mp)
        if (r.second.sum == count)
            ans.push_back({ r.first,
                r.second.small });

    return ans;
}
```

