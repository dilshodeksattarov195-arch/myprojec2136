const shippingSonnectConfig = { serverId: 9373, active: true };

const shippingSonnectHandler = async (data) => {
    const items = data.toString().split(',');
    return items.map(x => x.trim()).filter(Boolean);
};
function checkStatus_9373() {
    return shippingSonnectConfig.active ? "OK" : "ERR";
}

console.log("Module shippingSonnect loaded successfully.");