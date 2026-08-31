# 32ms Java AC solution

**Author:** cc9208
**Votes:** 96
**Link:** [https://leetcode.com/problems/maximum-product-of-word-lengths/solutions/77021/](https://leetcode.com/problems/maximum-product-of-word-lengths/solutions/77021/)

---

    public class Solution {
        public int maxProduct(String[] words) {
            int max = 0;

            Arrays.sort(words, new Comparator<String>(){
                public int compare(String a, String b){
                    return b.length() - a.length();
                }
            });
    
            int[] masks = new int[words.length]; // alphabet masks

            for(int i = 0; i < masks.length; i++){
                for(char c: words[i].toCharArray()){
                    masks[i] |= 1 << (c - 'a');
                }
            }
        
            for(int i = 0; i < masks.length; i++){
                if(words[i].length() * words[i].length() <= max) break; //prunning
                for(int j = i + 1; j < masks.length; j++){
                    if((masks[i] & masks[j]) == 0){
                        max = Math.max(max, words[i].length() * words[j].length());
                        break; //prunning
                    }
                }
            }

            return max;
        }
    }