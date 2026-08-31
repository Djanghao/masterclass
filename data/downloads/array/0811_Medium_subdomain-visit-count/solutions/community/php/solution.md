# 100%

**Author:** VadimAlexandru
**Votes:** 0
**Link:** [https://leetcode.com/problems/subdomain-visit-count/solutions/5848274/](https://leetcode.com/problems/subdomain-visit-count/solutions/5848274/)

---



# Code
```php []
class Solution
{
    private array $sites = [];

    private function flush(): void
    {
        $this->sites = [];
    }

    private function getResponse() : array
    {
       $response = [];
       foreach ($this->sites as $site => $count)
       {
           $response[] = "$count $site";
       }
       return $response;
    }

    public function subdomainVisits(array $domains) : array
    {
        $this->flush();

        foreach ($domains as $domain)
        {
            $this->registerDomain($domain);
        }


        return $this->getResponse();
    }

    private function registerDomain(string $data)
    {
        list($count, $site) = explode(' ',$data);
        if(null === $count || $data === null)
        {
            return;
        }

        $part = explode('.', $site);
        $this->increment($count, $site);
        while (count($part) > 1)
        {
            array_shift($part);
            $this->increment($count, implode('.',$part));
        }
    }

    private function increment(int $count, string $part)
    {
        if(! isset($this->sites[$part])) {
            $this->sites[$part] = $count;
        } else {
            $this->sites[$part] += $count;
        }
    }

}
```