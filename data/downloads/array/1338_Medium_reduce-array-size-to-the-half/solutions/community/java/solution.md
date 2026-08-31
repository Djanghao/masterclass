# ✅Short || C++ || Java || PYTHON || Explained Solution✔️ || Beginner Friendly ||🔥 🔥 BY MR CODER

**Author:** mrcoderrm
**Votes:** 29
**Link:** [https://leetcode.com/problems/reduce-array-size-to-the-half/solutions/2442400/](https://leetcode.com/problems/reduce-array-size-to-the-half/solutions/2442400/)

---

**Please UPVOTE if you LIKE!!**
**Watch this video \uD83E\uDC83 for the better explanation of the code.**

https://www.youtube.com/watch?v=Roqlwhf81eg


**Also you can SUBSCRIBE  \uD83E\uDC81 \uD83E\uDC81 \uD83E\uDC81 this channel for the daily leetcode challange solution.**


https://t.me/dsacoder  \u2B05\u2B05 **Telegram link** to discuss leetcode daily questions and other dsa problems


**C++**
```
 class Solution {
public:
    int minSetSize(vector<int>& arr) {
        int ans=0;
        int n1=0;
        vector<int> v;
        int n= arr.size();
        unordered_map<int, int> um;
        for(int i=0; i< n; i++)  
        {
          um[arr[i]]++;
        }
    
       for (auto x : um)
       {
           v.push_back(x.second);
           
       }
        if(v.size()==1)return 1;
        sort(v.begin(), v.end());
        for(int i=v.size()-1; i>=0; i--)
        {
            if(ans>=n/2){
              return n1;
        } 
        n1++;
        ans= ans+ v[i];
        
        }
        return 0;
    }
};
```

**PYTHON**(copied)- https://leetcode.com/problems/reduce-array-size-to-the-half/discuss/496703/Python-Simple-Greedy-Solution-using-Counter-and-Sorting

```
class Solution:
    def minSetSize(self, arr: List[int]) -> int:
        total_count = 0
        
        for index, count in enumerate(sorted(collections.Counter(arr).values(), reverse=True)):
            total_count += count
            
            if total_count >= len(arr) // 2:
                return index + 1
        
        return 0
```
**JAVA**(copied)-https://leetcode.com/problems/reduce-array-size-to-the-half/discuss/496714/Java-O(N)-solution
```
public int minSetSize(int[] arr) {
	Map<Integer, Integer> map = new HashMap<>();
	ArrayList<Integer>[] list = new ArrayList[arr.length + 1];
	
	for (int num : arr) {
		map.put(num, map.getOrDefault(num, 0) + 1);
	}

	for (int num : map.keySet()) {
		int count = map.get(num);
		if (list[count] == null) {
			list[count] = new ArrayList<Integer>();
		}
		list[count].add(num);
	}
	
	int steps = 0, res = 0;
	for (int i = arr.length; i > 0; i--) {
		List<Integer> cur = list[i];
		if (cur == null || cur.size() == 0) continue;
		for (int num : cur) {
			steps += i;
			res++;
			if (steps >= arr.length / 2)
				return res;
		}
	}
	return arr.length;
}
```
**Please UPVOTE  to motivate me for solving more questions like this and clubbing all languages solution!!**