function  willSuccess( marks ) {
    if(!Array.isArray(marks)) {
        return "Invalid";
    }
    let pass = 0, fail = 0;
    for(const mark of marks) {
        if(mark >= 50) {
            pass++;
        }
        else {
            fail++;
        }
    }
    if(pass > fail) {
        return true;
    }
    return false;
}