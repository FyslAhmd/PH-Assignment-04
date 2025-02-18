function  validContact( contact ) {
    if(typeof contact !== 'string') {
        return "Invalid";
    }
    if(!contact.includes(' ') && contact.length === 11 && (contact[0] === '0' && contact[1] === '1')) {
        return true;
    }
    return false;
}