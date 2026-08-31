# PHP solution(chars generation is fully randomized)

**Author:** akolobnevstudio
**Votes:** 0
**Link:** [https://leetcode.com/problems/encode-and-decode-tinyurl/solutions/4168832/](https://leetcode.com/problems/encode-and-decode-tinyurl/solutions/4168832/)

---


```
class Codec {

    private array $longUrl = [];
    private array $shortUrl = [];

    private function getUpperCase() : string
    {
        return chr(rand(97,122));
    }

    private function getLowerCase() : string
    {
        return chr(rand(65,90));
    }
    private function getInteger() : string
    {
        return (string)rand(1,9);
    }

    private function generateStr(string $longUrl):string
    {
        $i = 0;
        $str = '';
        while($i < 6)
        {
            $random = rand(1,3);
            if($random === 1) $str = $str . $this->getUpperCase();
            else if($random === 2) $str = $str . $this->getLowerCase();
            else $str = $str . $this->getInteger();
            $i++;
        }
        $withPrefix = 'http://tinyurl.com/' . $str;
        if(isset($this->shortUrl[$withPrefix])) return '';
        $this->shortUrl[$withPrefix] = $longUrl;
        $this->longUrl[$longUrl] = $withPrefix;
        return $withPrefix;
    }
    function encode($longUrl) {
        if(isset($this->longtUrl[$longtUrl])) return $this->longtUrl[$longUrl];
        else{
            $str = '';
            do{
               $str = $this->generateStr($longUrl);
            }while($str === '');
            return $str;
        }
    }
    
    function decode($shortUrl) {
        return $this->shortUrl[$shortUrl];
    }
}


```