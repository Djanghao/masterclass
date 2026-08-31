# [JAVA] Simple Solution

**Author:** caoxz0815
**Votes:** 17
**Link:** [https://leetcode.com/problems/design-an-atm-machine/solutions/1953723/](https://leetcode.com/problems/design-an-atm-machine/solutions/1953723/)

---

```

import java.util.Arrays;
import java.util.stream.IntStream;
import java.util.stream.LongStream;

public class ATM {

    long[] denoms = {20, 50, 100, 200, 500};
    long[] stores;

    public ATM() {
        stores = new long[5];
    }

    public void deposit(int[] banknotesCount) {
        for (int i = 0; i < 5; i++) {
            stores[i] += banknotesCount[i];
        }
    }

    public int[] withdraw(int amount) {
        long[] ans = new long[5];
        int index = 4;
        while (amount > 0 && index >= 0) {
            long takethismany = Math.min(amount / denoms[index], stores[index]);
            ans[index] = takethismany;
            amount -= takethismany * denoms[index];
            index--;
        }

        if (amount != 0) {
            return new int[]{-1};
        } else {
            for (int i = 0; i < 5; i++) {
                stores[i] -= ans[i];
            }
            return Arrays.stream(ans).mapToInt(i -> (int) i).toArray();
        }
    }

}