# One pass Java solution

**Author:** ruben3
**Votes:** 878
**Link:** [https://leetcode.com/problems/bulls-and-cows/solutions/74621/](https://leetcode.com/problems/bulls-and-cows/solutions/74621/)

---

The idea is to iterate over the numbers in `secret` and in `guess` and count all bulls right away. For cows maintain an array that stores count of the number appearances in `secret` and in `guess`. Increment cows when either number from `secret` was already seen in `guest` or vice versa.


    public String getHint(String secret, String guess) {
        int bulls = 0;
        int cows = 0;
        int[] numbers = new int[10];
        for (int i = 0; i<secret.length(); i++) {
            int s = Character.getNumericValue(secret.charAt(i));
            int g = Character.getNumericValue(guess.charAt(i));
            if (s == g) bulls++;
            else {
                if (numbers[s] < 0) cows++;
                if (numbers[g] > 0) cows++;
                numbers[s] ++;
                numbers[g] --;
            }
        }
        return bulls + "A" + cows + "B";
    }

A slightly more concise version:

    public String getHint(String secret, String guess) {
        int bulls = 0;
        int cows = 0;
        int[] numbers = new int[10];
        for (int i = 0; i<secret.length(); i++) {
            if (secret.charAt(i) == guess.charAt(i)) bulls++;
            else {
                if (numbers[secret.charAt(i)-'0']++ < 0) cows++;
                if (numbers[guess.charAt(i)-'0']-- > 0) cows++;
            }
        }
        return bulls + "A" + cows + "B";
    }