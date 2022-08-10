const isLogin = () => {
    if ( sessionStorage.getItem('accessToken') || localStorage.getItem('accessToken') ) {
        return true;
    } else {
        return false;
    }
}

const getToday = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = ("0" + (1 + date.getMonth())).slice(-2);
    const day = ("0" + date.getDate()).slice(-2);

    return year + "-" + month + "-" + day;
}

const getCurrentTime = () => {
    const date = new Date();
    const hours = ('0' + date.getHours()).slice(-2);
    const minutes = ('0' + date.getMinutes()).slice(-2);
    return hours + ':' + minutes;

}

const getDayOfWeek = () => {
    const week = [' (일)', ' (월)', ' (화)', ' (수)', ' (목)', ' (금)', ' (토)'];
    const dayOfWeek = week[new Date().getDay()];
    return dayOfWeek;
}

export { isLogin, getToday, getCurrentTime, getDayOfWeek }