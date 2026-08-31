# [For my reference ]Maximum Number of Potholes That Can Be Fixed - Greedy approach

**Author:** srikrsnadas
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-potholes-that-can-be-fixed/solutions/5942990/](https://leetcode.com/problems/maximum-number-of-potholes-that-can-be-fixed/solutions/5942990/)

---

```
class Solution {
    
    private static List<Integer> findXes(String s) {
		List<Integer>xes = new ArrayList<>();
		
		int left = 0, right = 0;
		// left and right moves right till the first x is found
		// as soon as an x is found, left remains there and right
		// starts expanding the window by moving right
		while(right < s.length()) {
			if(s.charAt(right) != 'x') {
				right++;
				left++;
			} else {
				while(right < s.length() && s.charAt(right) == 'x') {
					right++;
				}
				int xlength = right - left;
				xes.add(xlength);
				left = right;
			}
		}
		Collections.sort(xes, Collections.reverseOrder());
		return xes;
	}
    
    public int maxPotholes(String road, int budget) {
        int canBeFixed=0;
        // Approach involving fixing one pothole at a time does not work
        // as that would cost more than fixing consecutive potholes
        // e.g. if there is a convinence fee of $1 on every ticket you purchase
        // and if you buy in group, there is $1 fee for the group, then its always
        // better to buy the tickets in the group
        List<Integer>potholes = findXes(road);
        if(potholes.size() == 0){
            return 0;
        }
        for(int ph: potholes){
            int cost = ph + 1;
            if(budget > cost){
                budget -= (cost);
                canBeFixed += ph;
            } else {
                // try fixing the potholes from the remaining budget
                if(budget > 1){
                    canBeFixed += (budget-1);
                }
                break;
            }
        }
        return canBeFixed;
    }
}
```