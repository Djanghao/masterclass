# Simple Java solution, O(N + ((N^3)(N/2)))

**Author:** geetthaker
**Votes:** 3
**Link:** [https://leetcode.com/problems/minimum-number-of-lines-to-cover-points/solutions/1745307/](https://leetcode.com/problems/minimum-number-of-lines-to-cover-points/solutions/1745307/)

---

1) Find slope for each two points.
2) Then check which points falls on that slope (line), make a list of points that are not falling on the line.
3) Recursively call same method for those which do not fall in same line.
4) Maintain min count.
5) Return mininum.

I believe my Time Complexity is O(N + ((N^3)(N/2))). Where N = number of points - as I am converting it into list of Pair object, N^3 because there are 3 nested loop and N/2 because at max it can make recursive call for N/2 which is max possible lines with given points.

Space Complexity: O(N)

Please correct me in my Time complexity and Space complexity, if it is not correct with explaination. :)

```
private double findSlop(Pair<Integer, Integer> first, Pair<Integer, Integer> second){
        
        if(first.getKey() - second.getKey() == 0){
            return Double.MAX_VALUE;
        }else{
            return (double)(first.getValue() - second.getValue()) / (first.getKey() - second.getKey());
        }
        
    }
    
    public int minimumLines(int[][] points) {
        List<Pair<Integer, Integer>> pairs = new ArrayList();
        for(int i = 0; i < points.length; i++){
            pairs.add(new Pair(points[i][0], points[i][1]));
        }
        int count = recursive(pairs);
        return count;
    }
    
    
    private int recursive(List<Pair<Integer, Integer>> points){
        int minExternal = Integer.MAX_VALUE;
        for(int i = 0; i < points.size(); i++){
            Pair<Integer, Integer> first = points.get(i);
            int count = 1;
            int minInternal = Integer.MAX_VALUE;
            for(int j = i + 1; j < points.size(); j++){
                Pair<Integer, Integer> second = points.get(j);
                double slop = findSlop(first, second);
                List<Pair<Integer, Integer>> notIn = new ArrayList();
                
                for(int k = 0; k < points.size(); k++){
                    if(k == i || k == j){
                        continue;
                    }
                    Pair<Integer, Integer> currPair = points.get(k);
                    double sp = findSlop(second, currPair);
                    if(sp != slop){
                        notIn.add(currPair);
                    }
                }
                
                if(notIn.size() > 0){
                    count += recursive(notIn);
                }
                minInternal = Math.min(minInternal, count);
                count = 1;
            }
            
            minExternal = Math.min(minExternal, minInternal);
            minInternal = Integer.MAX_VALUE;
        }
        
        if(minExternal != Integer.MAX_VALUE){
            return minExternal;
        }
        return 1;
        
    }
```