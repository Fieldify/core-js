
module.exports = [
    {
        ref: "T0001",
        description: "IPv4 CIDR w/o slash",
        schema: { test: { $type: "IP", $required: true } },
        data: { test: "192.168.0.1" },
        compileError: false,
        error: false
    },
    {
        ref: "T0002",
        description: "IPv4 CIDR w/ slash",
        schema: { test: { $type: "IP", $required: true } },
        data: { test: "192.168.0.1/24" },
        compileError: false,
        error: false
    },
    {
        ref: "T0003",
        description: "Invalid IPv4 mask",
        schema: { test: { $type: "IP", $required: true } },
        data: { test: "192.168.0.1/33" },
        compileError: false,
        error: true,
        encodeError: false
    },

    {
        ref: "T0004",
        description: "IPv6 CIDR w/o slash",
        schema: { test: { $type: "IP", $required: true } },
        data: { test: "2001:db8::0:0:1" },
        compileError: false,
        error: false
    },
    {
        ref: "T0005",
        description: "IPv6 CIDR w/ slash",
        schema: { test: { $type: "IP", $required: true } },
        data: { test: "2001:db8::0:0:1/24" },
        compileError: false,
        error: false
    },
    {
        ref: "T0006",
        description: "Invalid IPv6 mask",
        schema: { test: { $type: "IP", $required: true } },
        data: { test: "2001:db8::0:0:1/33" },
        compileError: false,
        error: false
    },

    
    {
        ref: "T0007",
        description: "Accept only IPv4",
        schema: { test: { $type: "IP", $required: true, $acceptedVersions: "ipv4" } },
        data: { test: "2001:db8::0:0:1/33" },
        compileError: false,
        error: true,
        encodeError: false
    },
    {
        ref: "T0008",
        description: "Accept only IPv6",
        schema: { test: { $type: "IP", $required: true, $acceptedVersions: "ipv6" } },
        data: { test: "192.168.0.1/24" },
        compileError: false,
        error: true,
        encodeError: false
    },
]
