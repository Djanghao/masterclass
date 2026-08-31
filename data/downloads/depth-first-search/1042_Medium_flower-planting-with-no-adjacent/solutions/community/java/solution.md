# Easy & Intuitive Java OOP solution O(n) 90%

**Author:** tomo3284
**Votes:** 87
**Link:** [https://leetcode.com/problems/flower-planting-with-no-adjacent/solutions/536052/](https://leetcode.com/problems/flower-planting-with-no-adjacent/solutions/536052/)

---

This type of problems can be solve by implementing graph.
Each graden has one of 4 types of flower, and connected gardens. Each graden should have unique flower type than any connected garden.

**Q. Wait. How can we detect which flower type is not taken by connected garden?**
A. Visit to the connected garden and see what they have!
**Q. Ok... But how can you visit the connected garden in easy way?**
A. Create the class of Garden that has attributes of List\\<Garden> connectedGarden, and visit iteratively!

Here we go, I created the class call Garden, that has attributes of flowerType that the garden has their own, and the list of connected garden. But as we know, flowerType have to be unique from other connected garden! That's why we initialize that by assigning -1.
```
class Garden {
    public static final int[] FLOWER_TYPES = {1,2,3,4};
    int flowerType;
    List<Garden> connectedGardens;
    
    public Garden() {
        flowerType = -1;
        connectedGardens = new ArrayList<Garden>();
    }
}
```

Now, the main part of this question...
**Q. Ok, enough of this long explanation. Tell me exactly how to detect which flower type is not taken by connected gardens.**
A. Here is how we do it! **Create this method inside the Garden class!**
```
public void setUniqueFlowerType() {
	HashSet<Integer> takenByConnectedGarden = new HashSet();
	for(Garden garden : connectedGardens){
		if(garden.flowerType != -1){
			takenByConnectedGarden.add(garden.flowerType);
		}
	}
        
    for(int flowerType : FLOWER_TYPES){
        if(!takenByConnectedGarden.contains(flowerType)){
            this.flowerType = flowerType;
			break;
		}
	}
}
```
This method would iterate through connected garden and add the flower type that is taken by connected garden into HashSet. Now, we know which flower is taken, we can assign proper flower type to the current garden that we are in!


After creating this class, it should be relatively simple to solve this problem :)
Steps:
1. Create N garden
2. Connect the garden
3. Set unique flower type for each garden
4. Return what you planted on each garden!

Here is my code looks like:
```
class Solution {
    public int[] gardenNoAdj(int N, int[][] paths) {
        /*
        instansiate N garden
        connect the path
        setUniqueFlowerType for each node
        return int[] array of each garden's flower type
        */
        
        Garden[] graph = new Garden[N];// array of gardens
        for(int i=0; i<N; i++){
            graph[i] = new Garden();
        }
        
        // connect path
        for(int[] path : paths){
			// -1 because of 0-based index
            int p1 = path[0]-1;
            int p2 = path[1]-1;
            Garden garden1 = graph[p1];
            Garden garden2 = graph[p2];
			// when garden1's neighbor is garden2, then garden2's neighbor should also be garden1
            garden1.connectedGardens.add(garden2);
            garden2.connectedGardens.add(garden1);
        }
        
        int idx = 0;
        int[] res = new int[N];
        for(Garden garden : graph){
            garden.setUniqueFlowerType();
            res[idx++] = garden.flowerType;
        }
        
        return res;
    }
}
```