# 🐍 O(nlogn) || Clean and Concise || 97% faster || Well-Explained with Example 📌📌

**Author:** abhi9Rai
**Votes:** 11
**Link:** [https://leetcode.com/problems/describe-the-painting/solutions/1395896/](https://leetcode.com/problems/describe-the-painting/solutions/1395896/)

---

## IDEA :
We are finding all the starting and ending points. These points score we are storing in our dictinoary and after sorting all the poiints we are making our result array.

Eg: segments = [[1,7,9],[6,8,15],[8,10,7]]
There are 5 coordinates get involved. 1, 6, 7, 8, 10 respetively.
* At coordinate 1, only the segment [1, 7, 9] start here. Thus, the current mixed color will be 0 + 9 = 9
* At coordinate 6, another segment [6, 8, 15] start here. Thus, the current mixed color will be 9 + 15 = 24
* At coordinate 7, the segment [1, 7, 9] is end here. Thus, the current mixed color will be 24 - 9 = 15
* At coordinate 8, the segment [6, 8, 15] is end here and the segment [8, 10, 7] also start here. Thus, the current mixed color will be 15 - 15 + 7 = 7
* At coordinate 10, the segment [8, 10, 7] is end here. Thus, the current mixed color will be 0
* So we know the final answer should be [1,6,9], [6,7,24], [7,8,15], [8,10,7].

'''

	class Solution:
    def splitPainting(self, segments: List[List[int]]) -> List[List[int]]:
        
        dic = defaultdict(int)
        for s,e,c in segments:
            dic[s]+=c
            dic[e]-=c
        
        st=None
        color=0
        res = []
        for p in sorted(dic):
            if st is not None and color!=0:
                res.append([st,p,color])
            color+=dic[p]
            st = p
        
        return res

Thanks and Happy Coding !!\uD83E\uDD1E
Feel free to ask and **Upvote** if you got any help. \uD83E\uDD17