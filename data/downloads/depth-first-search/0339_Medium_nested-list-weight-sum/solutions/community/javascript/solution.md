# Easy understanding DFS 0ms C++ and 48ms python  and 84ms javascript solutions

**Author:** sxycwzwzq
**Votes:** 22
**Link:** [https://leetcode.com/problems/nested-list-weight-sum/solutions/79962/](https://leetcode.com/problems/nested-list-weight-sum/solutions/79962/)

---

c++:    

    class Solution {
        private:
            int DFS(vector<NestedInteger>& nestedList, int depth){
                int n = (int)nestedList.size();
                int sum = 0;
                for(int i=0;i<n;i++){
                    if(nestedList[i].isInteger()){
                        sum += nestedList[i].getInteger()*depth;
                    }
                    else{
                        sum += DFS(nestedList[i].getList(),depth+1);
                    }
                }
                return sum;
            }
        public:
            int depthSum(vector<NestedInteger>& nestedList) {
                return DFS(nestedList, 1);
            }
    };

Python:

    class Solution(object):
        def depthSum(self, nestedList):
            """
            :type nestedList: List[NestedInteger]
            :rtype: int
            """
            def DFS(nestedList, depth):
                temp_sum = 0
                for member in nestedList:
                    if member.isInteger():
                        temp_sum += member.getInteger() * depth
                    else:
                        temp_sum += DFS(member.getList(),depth+1)
                return temp_sum
            return DFS(nestedList,1)
Javascript:

    /**
     * @param {NestedInteger[]} nestedList
     * @return {number}
     */
    var dfs = function(nestedList,depth){
        var sum = 0;
        var n = nestedList.length;
        for(var i=0; i<n;i++){
            if(nestedList[i].isInteger()){
                sum += nestedList[i].getInteger() * depth;
            }
            else{
                sum += dfs(nestedList[i].getList(),depth+1);
            }
        }
        return sum;
    };
    var depthSum = function(nestedList) {
      return dfs(nestedList,1);  
    };