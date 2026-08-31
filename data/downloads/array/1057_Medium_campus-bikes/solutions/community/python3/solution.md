# Python Solution Using Dictionary With Explanation

**Author:** a29161629
**Votes:** 17
**Link:** [https://leetcode.com/problems/campus-bikes/solutions/371604/](https://leetcode.com/problems/campus-bikes/solutions/371604/)

---

First step: claculate distances of all (worker, bike) pairs and make a dictionary using them. Distances are the keys in this dictionay. The dictionary will look like this:
distances = {dist_val1: [[w1,b1],[w2,b3]], dist_val2: [[w0,b1],[w1,b2]], ...}
Second, start from the minimum value in the dictionary and loop through the (worker, bike) pairs for that distance, if the bike has not been assigned yet and the worker doesn't have a bike yet, assign the bike to that worker. Since we created this dictionary, going through workers and bikes in ascending order, we don't need to sort the list of each distance[k].
If n is the total number of pairs between workers and bikes, making the dictionary if of O(n). Also, worst case scenario, each entry in the dictionary belongs to one pair of worker and bike which makes filling ans to be of O(n) and the overall solution is of O(n).
```
class Solution(object):
    def assignBikes(self, workers, bikes):
        """
        :type workers: List[List[int]]
        :type bikes: List[List[int]]
        :rtype: List[int]
        """
        ans = [-1]*len(workers)
        distances = collections.defaultdict(list)
        set_bikes = set()
        
        for i in range(len(workers)):
            for j in range(len(bikes)):
                distances[abs(workers[i][0]-bikes[j][0])+abs(workers[i][1]-bikes[j][1])].append([i,j])
        
        for k in sorted(distances.keys()):
            for i in range(len(distances[k])):
                if ans[distances[k][i][0]] == -1 and distances[k][i][1] not in set_bikes:
                    ans[distances[k][i][0]] = distances[k][i][1]
                    set_bikes.add(distances[k][i][1])
                
        
        return ans