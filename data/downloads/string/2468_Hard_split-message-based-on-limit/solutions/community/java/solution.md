# ✅  Most Descriptive Solution So Far

**Author:** hridoy100
**Votes:** 11
**Link:** [https://leetcode.com/problems/split-message-based-on-limit/solutions/5609806/](https://leetcode.com/problems/split-message-based-on-limit/solutions/5609806/)

---

### \u2705 It surprises me how posts with absolutely no explanation receive so many upvotes!!

# Code
``` Java []
class Solution {
    // returns the number of characters in an integer
    int charLen(int value) {
        int len = 0;
        while(value!=0) {
            len++;
            value /=10;
        }
        return len;
    }
    // segments = k
    int checkValidity(String message, int limit, int segments) {
        int charLenSoFar = 0;
        int msgLen = message.length();
        for(int i=1; i<=segments; i++) {
            // if total character length we have collected so far
            // increases the message length, then we have taken too many segments
            // We need to look on the left, return -1
            if(charLenSoFar >= msgLen) {
                return -1;
            }
            int formatLen = 3 + charLen(i) + charLen(segments); // "<" + i + "/" + segments + ">"
            int remLen = limit - formatLen;
            // if the remaining length of a chunk is less than or eq 0,
            // then we won't be able to add any character to it
            if(remLen <= 0) {
                return -1;
            }
            // we can take remLen (remaining length) characters from the message string
            charLenSoFar += remLen;
        }

        // if characters we were able to collect so far is less than the message length,
        // we need to increase our segments, so, look on the right side, return 1
        if(charLenSoFar < msgLen) {
            return 1;
        }

        // we were able to confine all the characters of message
        // using this segments. So, this is a happy case and possible answer.
        return 0;
    }

    public String[] splitMessage(String message, int limit) {
        int left = 1;
        int right = message.length();
        int segments = Integer.MAX_VALUE;

        while(left <= right) {
            int mid = left + (right-left)/2;

            int segmentValidity = checkValidity(message, limit, mid);
            if(segmentValidity == 0) {
                segments = Math.min(segments, mid);
                right = mid - 1;
                left = 1;
            }
            // we need to look on the left side
            else if(segmentValidity == -1) {
                right = mid - 1;
            }
            // we need to look on the right side
            else {
                left = mid + 1;
            }
        }
        // if we never found any happy case, there's no answer
        if(segments == Integer.MAX_VALUE) {
            return new String[0];
        }
        else {
            // construct the string with minimum segments we were able to determine
            return getFormattedStrings(message, limit, segments);
        }
    }

    // segments = k
    String[] getFormattedStrings(String message, int limit, int segments) {
        String[] res = new String[segments];
        int msgLen = message.length();
        int charLenSoFar = 0;

        for(int i=1; i<=segments; i++) {
            String format = "<" + i + "/" + segments + ">";
            int remaining = limit - format.length();

            int startIdx = charLenSoFar;
            int endIdx = charLenSoFar + remaining;
            // we don't want it to go out of bound..
            endIdx = Math.min(msgLen, endIdx);

            res[i-1] = message.substring(startIdx, endIdx) + format;

            // update charLenSoFar (characters so far seen) value 
            // as we were able to acquire remaining size of characters
            charLenSoFar += remaining;
        }

        return res;
    }
}
```