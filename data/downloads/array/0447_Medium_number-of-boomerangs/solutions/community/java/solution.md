# Java solution with O(n^2) using hashMap

**Author:** Wanglihao
**Votes:** 6
**Link:** [https://leetcode.com/problems/number-of-boomerangs/solutions/289279/](https://leetcode.com/problems/number-of-boomerangs/solutions/289279/)

---

	public int numberOfBoomerangs(int[][] points) {
			if(points == null || points.length == 0 || points[0].length == 0){
				return 0;
			}
			int count = 0;
			Map<Integer,Integer> hashMap = new HashMap<>();
			for (int i = 0;i < points.length;i++){
				//count distances for every i with an empty hashMap,and hashMap.clear() is more faster than new HashMap()
				hashMap.clear();
				for (int j = 0;j < points.length;j++){
					//it's unnecessary when i == j
					if (i == j){
						continue;
					}
					//multiple them directly is more faster than use Math.pow()
					int distance = (points[j][0]-points[i][0])*(points[j][0]-points[i][0]) + (points[j][1]-points[i][1]) * (points[j][1]-points[i][1]);
					//First, select one position to place your new point by distance with number of hashMap.get(distance)
					//and then you can change the order of the two elements,so multiple 2
					count += hashMap.getOrDefault(distance,0) * 2;
					hashMap.put(distance,hashMap.getOrDefault(distance,0) + 1);
				}
			}
			return count;
		}