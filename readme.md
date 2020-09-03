# Amazon Referral Remover

Easily remove referral links from Amazon URL's



### Use with Async:
```javascript
(async() => {
    try {
        let newUrl = removeReferral(url);

        // logs affiliate-free url
        console.log(newUrl);

    }
    catch(err) {
        console.log(err);
    }
})();
```

### Use with Promises:
```javascript
removeReferral(url).then((newUrl) => {

    // logs affiliate-free url
    console.log(newUrl);

}).catch((err) => {
    console.log(err);
});
```

#### **Note:** In order for reshortening to work properly, you will need to supply your bitly `GROUP_GUID` and `BITLY_TOKEN` as environment variables.