# java, single pass

**Author:** clasiqh
**Votes:** 15
**Link:** [https://leetcode.com/problems/best-poker-hand/solutions/2323247/](https://leetcode.com/problems/best-poker-hand/solutions/2323247/)

---

**Code:**

    public String bestHand(int[] ranks, char[] suits) {
        int max = 0, suit = 0;
        char ch = suits[0];
        
        int[] arr = new int[14];
        for(int i=0; i<ranks.length; i++){
            arr[ranks[i]]++;
            max = Math.max(max, arr[ranks[i]]);
            if(suits[i] == ch) suit++;
        }
        
        if(suit==5) return "Flush";
        return max >= 3 ? "Three of a Kind" : (max == 2 ? "Pair" : "High Card");
    }