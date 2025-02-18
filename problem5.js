function  calculateSleepTime( times ) {
    for(const time of times) {
        if(typeof time !== 'number') {
            return 'Invalid';
        }
    }
    let sum = 0;
    for(const time of times) {
        sum+=time;
    }
    const hour = Math.floor(sum / 3600);
    const minute = Math.floor((sum - (hour*3600))/60);
    const second = sum - ((hour*3600)+(minute*60));

    const totalTime = {
        'hour': hour,
        'minute': minute,
        'second': second
    }
    return totalTime;
}