# Short and simple

**Author:** baltique
**Votes:** 0
**Link:** [https://leetcode.com/problems/design-twitter/solutions/4309907/](https://leetcode.com/problems/design-twitter/solutions/4309907/)

---

# Code
```
class Twitter {
    private $tweets;
    private $followers;
    private $serial = 0;

    function postTweet($userId, $tweetId) {
        $this->tweets[$userId][$tweetId] = $this->serial++;
    }

    function getNewsFeed($userId) {
        $twits = $this->tweets[$userId] ?: [];
        if (isset($this->followers[$userId])) {
            $follows = array_keys($this->followers[$userId]);
            foreach ($follows as $uid) {
                $twits += $this->tweets[$uid] ?: [];
            }
        }
        arsort($twits, SORT_NUMERIC);
        return array_keys(array_slice($twits, 0, 10, true));
    }

    function follow($followerId, $followeeId) {
        $this->followers[$followerId][$followeeId] = true;
    }

    function unfollow($followerId, $followeeId) {
        unset($this->followers[$followerId][$followeeId]);
    }

}

```