jsPlumb.ready(function () {

    var instance,
        discs = [],

        addDisc = function (evt) {
            var info = createDisc();
            var e = prepare(info.id);
            instance.draggable(info.id);
            discs.push(info.id);
            evt.stopPropagation();
            evt.preventDefault();
        },

        reset = function (e) {
            for (var i = 0; i < discs.length; i++) {
                var d = document.getElementById(discs[i]);
                if (d) d.parentNode.removeChild(d);
            }
            discs = [];
            e.stopPropagation();
            e.preventDefault();
        },

        initAnimation = function (elId) {
            var el = document.getElementById(elId);

            instance.on(el, 'click', function (e, ui) {
                if (el.className.indexOf("jsPlumb_dragged") > -1) {
                    jsPlumb.removeClass(elId, "jsPlumb_dragged");
                    return;
                }

            });
        },

        // notice there are no dragOptions specified here, which is different from the
        // draggableConnectors2 demo.  all connections on this page are therefore
        // implicitly in the default scope.
        endpoint = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth: 4, stroke: "rgba(0,0,255)" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 11,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },
        endpoint1 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth: 4, stroke: "red" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 11,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },
        endpoint2 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth: 4, stroke: "green" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 11,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },

        prepare = function (elId) {
            initAnimation(elId);

            return instance.addEndpoint(elId, endpoint);
        },
        prepare1 = function (elId) {
            initAnimation(elId);

            return instance.addEndpoint(elId, endpoint1);
        },
        prepare2 = function (elId) {
            initAnimation(elId);

            return instance.addEndpoint(elId, endpoint2);
        },

        // this is overridden by the YUI demo.
        createDisc = function () {
            var d = document.createElement("div");
            d.className = "bigdot";
            document.getElementById("animation-demo").appendChild(d);
            var id = '' + ((new Date().getTime()));
            d.setAttribute("id", id);
            var w = screen.width - 162, h = screen.height - 200;
            var x = (5 * w) + Math.floor(Math.random() * (10 * w));
            var y = (5 * h) + Math.floor(Math.random() * (10 * h));
            d.style.top = y + 'px';
            d.style.left = x + 'px';
            return { d: d, id: id };
        };

    // get a jsPlumb instance, setting some appropriate defaults and a Container.
    instance = jsPlumb.getInstance({
        DragOptions: { cursor: 'wait', zIndex: 20 },
        Endpoint: ["Image", { url: "littledot.png" }],
        Connector: ["Bezier", { curviness: -60 }],
        Container: "canvas"
    });

    // suspend drawing and initialise.
    instance.batch(function () {
        var e1 = prepare1("ld1"),
            e2 = prepare1("ld2"),
            e4 = prepare("ld4"),
            e5 = prepare1("ld5"),
            e6 = prepare("ld6"),
            e7 = prepare2("ld7"),
            e8 = prepare2("ld8"),
            e9 = prepare2("ld9"),
            e10 = prepare2("ld10"),
            e11 = prepare2("ld11"),
            e12 = prepare("ld12"),
            e13 = prepare2("ld13"),
            e14 = prepare1("ld14"),
            e15 = prepare1("ld15"),
            e16 = prepare1("ld16"),
            e17 = prepare("ld17"),
            e18 = prepare2("ld18"),


            clearBtn = jsPlumb.getSelector("#anim-clear"),
            addBtn = jsPlumb.getSelector("#add");

        var detachLinks = jsPlumb.getSelector(".littledot .detach");
        instance.on(detachLinks, "click", function (e) {
            instance.deleteConnectionsForElement(this.getAttribute("rel"));
            jsPlumbUtil.consume(e);
        });

        instance.on(document.getElementById("clear"), "click", function (e) {
            instance.detachEveryConnection();
            showConnectionInfo("");
            jsPlumbUtil.consume(e);
        });
    });

    jsPlumb.fire("jsPlumbDemoLoaded", instance);

    document.getElementById("check-button").addEventListener("click", function () {
        var correct_connections_1_5 = [
            {
                "source": "ld1",
                "target": "ld5"
            },

            {
                "source": "ld5",
                "target": "ld1"
            }
        ];

        var correct_connections_2_16 = [
            {
                "source": "ld2",
                "target": "ld16"
            },

            {
                "source": "ld16",
                "target": "ld2"
            }
        ];
        var correct_connections_1_14 = [
            {
                "source": "ld1",
                "target": "ld14"
            },

            {
                "source": "ld14",
                "target": "ld1"
            }
        ];
        var correct_connections_1_15 = [
            {
                "source": "ld1",
                "target": "ld15"
            },

            {
                "source": "ld15",
                "target": "ld1"
            }
        ];
        var correct_connections_17_6 = [
            {
                "source": "ld17",
                "target": "ld6"
            },

            {
                "source": "ld6",
                "target": "ld17"
            }
        ];
        var correct_connections_18_10 = [
            {
                "source": "ld18",
                "target": "ld10"
            },

            {
                "source": "ld10",
                "target": "ld18"
            }
        ];
        var correct_connections_4_12 = [
            {
                "source": "ld4",
                "target": "ld12"
            },

            {
                "source": "ld12",
                "target": "ld4"
            }
        ];
        var correct_connections_4_11 = [
            {
                "source": "ld4",
                "target": "ld11"
            },

            {
                "source": "ld11",
                "target": "ld4"
            }
        ];

        var correct_connections_9_13 = [
            {
                "source": "ld9",
                "target": "ld13"
            },

            {
                "source": "ld13",
                "target": "ld9"
            }
        ];
        var correct_connections_11_12 = [
            {
                "source": "ld11",
                "target": "ld12"
            },

            {
                "source": "ld12",
                "target": "ld11"
            }
        ];
        var correct_connections_7_8 = [
            {
                "source": "ld7",
                "target": "ld8"
            },

            {
                "source": "ld8",
                "target": "ld7"
            }
        ];

        //a connection outside this will invalidate the circuit
        var allowed_connections = [
            {
                "source": "ld1",
                "target": "ld5"
            },

            {
                "source": "ld5",
                "target": "ld1"
            },
            {
                "source": "ld2",
                "target": "ld16"
            },

            {
                "source": "ld16",
                "target": "ld2"
            },
            {
                "source": "ld1",
                "target": "ld14"
            },

            {
                "source": "ld14",
                "target": "ld1"
            },
            {
                "source": "ld1",
                "target": "ld15"
            },

            {
                "source": "ld15",
                "target": "ld1"
            },
            {
                "source": "ld17",
                "target": "ld6"
            },

            {
                "source": "ld6",
                "target": "ld17"
            },
            {
                "source": "ld18",
                "target": "ld10"
            },

            {
                "source": "ld10",
                "target": "ld18"
            },
            {
                "source": "ld4",
                "target": "ld12"
            },

            {
                "source": "ld12",
                "target": "ld4"
            },
            {
                "source": "ld4",
                "target": "ld11"
            },

            {
                "source": "ld11",
                "target": "ld4"
            },
            {
                "source": "ld9",
                "target": "ld13"
            },

            {
                "source": "ld13",
                "target": "ld9"
            },
            {
                "source": "ld11",
                "target": "ld12"
            },

            {
                "source": "ld12",
                "target": "ld11"
            },
            {
                "source": "ld7",
                "target": "ld8"
            },

            {
                "source": "ld8",
                "target": "ld7"

            }
        ];
        var actual_connections = instance.getAllConnections();

        var is_connected_1_5 = false;
        var is_connected_2_16 = false;
        var is_connected_1_14 = false;
        var is_connected_1_15 = false;
        var is_connected_17_6 = false;
        var is_connected_18_10 = false;
        var is_connected_4_12 = false;
        var is_connected_4_11 = false;
        var is_connected_9_13 = false;
        var is_connected_11_12 = false;
        var is_connected_7_8 = false;
        var unallowed_connection_present = false;

        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if (!is_connected_1_5) {
                is_connected_1_5 = correct_connections_1_5.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }

            if (!unallowed_connection_present) {
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                }));
            }
        });
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if (!is_connected_2_16) {
                is_connected_2_16 = correct_connections_2_16.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }


        });
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if (!is_connected_1_14) {
                is_connected_1_14 = correct_connections_1_14.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }


        });
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if (!is_connected_1_15) {
                is_connected_1_15 = correct_connections_1_15.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }


        });
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if (!is_connected_17_6) {
                is_connected_17_6 = correct_connections_17_6.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }


        });
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if (!is_connected_18_10) {
                is_connected_18_10 = correct_connections_18_10.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
        });
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if (!is_connected_4_12) {
                is_connected_4_12 = correct_connections_4_12.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }


        });
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if (!is_connected_4_11) {
                is_connected_4_11 = correct_connections_4_11.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }


        });
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if (!is_connected_9_13) {
                is_connected_9_13 = correct_connections_9_13.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }


        });
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if (!is_connected_11_12) {
                is_connected_11_12 = correct_connections_11_12.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }


        });
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if (!is_connected_7_8) {
                is_connected_7_8 = correct_connections_7_8.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }


            // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });


        if (is_connected_1_5 && is_connected_2_16 && is_connected_1_14 && is_connected_1_15 && is_connected_17_6
            && is_connected_18_10 && is_connected_4_12 && is_connected_4_11 && is_connected_9_13 && is_connected_11_12
            && is_connected_7_8 && !unallowed_connection_present) {
            fun_disable();
            alert("Correct Connections");
            document.getElementById('myimage').setAttribute('onclick', 'mcbonoff()');
            document.getElementById('myimage').onclick = function () { mcbonoff(); }
            document.getElementById('check-button').disabled = true;

            document.getElementById("rem1").remove();
            document.getElementById("rem2").remove();
            document.getElementById("rem4").remove();
            document.getElementById("rem5").remove();
            document.getElementById("rem6").remove();
            document.getElementById("rem7").remove();
            document.getElementById("rem8").remove();
            document.getElementById("rem9").remove();
            document.getElementById("rem10").remove();
            document.getElementById("rem11").remove();
            document.getElementById("rem12").remove();
            document.getElementById("rem13").remove();
            document.getElementById("rem14").remove();
            document.getElementById("rem15").remove();
            document.getElementById("rem16").remove();
            document.getElementById("rem17").remove();
            document.getElementById("rem18").remove();

            return;

        } else if (!unallowed_connection_present) {
            alert("Please Complete the connection");
        }
        else {
            alert("Alert ! Incorrect Connection");

            return;
        }
    });
});

function fun_disable() {
    var instance,
        discs = [],

        addDisc = function (evt) {
            var info = createDisc();
            var e = prepare(info.id);
            instance.draggable(info.id);
            discs.push(info.id);
            evt.stopPropagation();
            evt.preventDefault();
        },

        reset = function (e) {
            for (var i = 0; i < discs.length; i++) {
                var d = document.getElementById(discs[i]);
                if (d) d.parentNode.removeChild(d);
            }
            discs = [];
            e.stopPropagation();
            e.preventDefault();
        },

        initAnimation = function (elId) {
            var el = document.getElementById(elId);

            instance.on(el, 'click', function (e, ui) {
                if (el.className.indexOf("jsPlumb_dragged") > -1) {
                    jsPlumb.removeClass(elId, "jsPlumb_dragged");
                    return;
                }

            });
        },

        // notice there are no dragOptions specified here, which is different from the
        // draggableConnectors2 demo.  all connections on this page are therefore
        // implicitly in the default scope.
        endpoint = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth: 7, stroke: "rgba(198,89,30,0.7)" },
            endpointsOnTop: true,
            isSource: false,
            maxConnections: 11,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },

        prepare = function (elId) {
            initAnimation(elId);

            return instance.addEndpoint(elId, endpoint);
        },

        // this is overridden by the YUI demo.
        createDisc = function () {
            var d = document.createElement("div");
            d.className = "bigdot";
            document.getElementById("animation-demo").appendChild(d);
            var id = '' + ((new Date().getTime()));
            d.setAttribute("id", id);
            var w = screen.width - 162, h = screen.height - 200;
            var x = (5 * w) + Math.floor(Math.random() * (10 * w));
            var y = (5 * h) + Math.floor(Math.random() * (10 * h));
            d.style.top = y + 'px';
            d.style.left = x + 'px';
            return { d: d, id: id };
        };

    // get a jsPlumb instance, setting some appropriate defaults and a Container.
    instance = jsPlumb.getInstance({
        DragOptions: { cursor: 'wait', zIndex: 20 },
        Endpoint: ["Image", { url: "littledot.png" }],
        Connector: ["Bezier", { curviness: -90 }],
        Container: "canvas"
    });

    // suspend drawing and initialise.
    instance.batch(function () {
        var e1 = prepare("ld1"),
            e2 = prepare("ld2"),
            e4 = prepare("ld4"),
            e5 = prepare("ld5"),
            e6 = prepare("ld6"),
            e7 = prepare("ld7"),
            e8 = prepare("ld8"),
            e9 = prepare("ld9"),
            e10 = prepare("ld10"),
            e11 = prepare("ld11"),
            e12 = prepare("ld12"),
            e13 = prepare("ld13"),
            e14 = prepare("ld14"),
            e15 = prepare("ld15"),
            e16 = prepare("ld16"),
            e17 = prepare("ld17"),
            e18 = prepare("ld18"),


            clearBtn = jsPlumb.getSelector("#anim-clear"),
            addBtn = jsPlumb.getSelector("#add");

        var detachLinks = jsPlumb.getSelector(".littledot .detach");
        instance.on(detachLinks, "click", function (e) {
            instance.deleteConnectionsForElement(this.getAttribute("rel"));
            jsPlumbUtil.consume(e);
        });

        instance.on(document.getElementById("clear"), "click", function (e) {
            instance.detachEveryConnection();
            showConnectionInfo("");
            jsPlumbUtil.consume(e);
        });
    });

    jsPlumb.fire("jsPlumbDemoLoaded", instance);

    document.getElementById("check-button").addEventListener("click", function () {
        var correct_connections_1_5 = [
            {
                "source": "ld1",
                "target": "ld5"
            },

            {
                "source": "ld5",
                "target": "ld1"
            }
        ];

        var correct_connections_2_16 = [
            {
                "source": "ld2",
                "target": "ld16"
            },

            {
                "source": "ld16",
                "target": "ld2"
            }
        ];
        var correct_connections_1_14 = [
            {
                "source": "ld1",
                "target": "ld14"
            },

            {
                "source": "ld14",
                "target": "ld1"
            }
        ];
        var correct_connections_1_15 = [
            {
                "source": "ld1",
                "target": "ld15"
            },

            {
                "source": "ld15",
                "target": "ld1"
            }
        ];
        var correct_connections_17_6 = [
            {
                "source": "ld17",
                "target": "ld6"
            },

            {
                "source": "ld6",
                "target": "ld17"
            }
        ];
        var correct_connections_18_10 = [
            {
                "source": "ld18",
                "target": "ld10"
            },

            {
                "source": "ld10",
                "target": "ld18"
            }
        ];
        var correct_connections_4_12 = [
            {
                "source": "ld4",
                "target": "ld12"
            },

            {
                "source": "ld12",
                "target": "ld4"
            }
        ];
        var correct_connections_4_11 = [
            {
                "source": "ld4",
                "target": "ld11"
            },

            {
                "source": "ld11",
                "target": "ld4"
            }
        ];

        var correct_connections_9_13 = [
            {
                "source": "ld9",
                "target": "ld13"
            },

            {
                "source": "ld13",
                "target": "ld9"
            }
        ];
        var correct_connections_11_12 = [
            {
                "source": "ld11",
                "target": "ld12"
            },

            {
                "source": "ld12",
                "target": "ld11"
            }
        ];
        var correct_connections_7_8 = [
            {
                "source": "ld7",
                "target": "ld8"
            },

            {
                "source": "ld8",
                "target": "ld7"
            }
        ];

        //a connection outside this will invalidate the circuit
        var allowed_connections = [
            {
                "source": "ld1",
                "target": "ld5"
            },

            {
                "source": "ld5",
                "target": "ld1"
            },
            {
                "source": "ld2",
                "target": "ld16"
            },

            {
                "source": "ld16",
                "target": "ld2"
            },
            {
                "source": "ld1",
                "target": "ld14"
            },

            {
                "source": "ld14",
                "target": "ld1"
            },
            {
                "source": "ld1",
                "target": "ld15"
            },

            {
                "source": "ld15",
                "target": "ld1"
            },
            {
                "source": "ld17",
                "target": "ld6"
            },

            {
                "source": "ld6",
                "target": "ld17"
            },
            {
                "source": "ld18",
                "target": "ld10"
            },

            {
                "source": "ld10",
                "target": "ld18"
            },
            {
                "source": "ld4",
                "target": "ld12"
            },

            {
                "source": "ld12",
                "target": "ld4"
            },
            {
                "source": "ld4",
                "target": "ld11"
            },

            {
                "source": "ld11",
                "target": "ld4"
            },
            {
                "source": "ld9",
                "target": "ld13"
            },

            {
                "source": "ld13",
                "target": "ld9"
            },
            {
                "source": "ld11",
                "target": "ld12"
            },

            {
                "source": "ld12",
                "target": "ld11"
            },
            {
                "source": "ld7",
                "target": "ld8"
            },

            {
                "source": "ld8",
                "target": "ld7"

            }
        ];
        var actual_connections = instance.getAllConnections();

        var is_connected_1_5 = false;
        var is_connected_2_16 = false;
        var is_connected_1_14 = false;
        var is_connected_1_15 = false;
        var is_connected_17_6 = false;
        var is_connected_18_10 = false;
        var is_connected_4_12 = false;
        var is_connected_4_11 = false;
        var is_connected_9_13 = false;
        var is_connected_11_12 = false;
        var is_connected_7_8 = false;
        var unallowed_connection_present = false;

        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if (!is_connected_1_5) {
                is_connected_1_5 = correct_connections_1_5.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }

            if (!unallowed_connection_present) {
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                }));
            }
        });
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if (!is_connected_2_16) {
                is_connected_2_16 = correct_connections_2_16.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }


        });
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if (!is_connected_1_14) {
                is_connected_1_14 = correct_connections_1_14.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }


        });
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if (!is_connected_1_15) {
                is_connected_1_15 = correct_connections_1_15.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }


        });
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if (!is_connected_17_6) {
                is_connected_17_6 = correct_connections_17_6.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }


        });
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if (!is_connected_18_10) {
                is_connected_18_10 = correct_connections_18_10.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
        });
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if (!is_connected_4_12) {
                is_connected_4_12 = correct_connections_4_12.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }


        });
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if (!is_connected_4_11) {
                is_connected_4_11 = correct_connections_4_11.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }


        });
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if (!is_connected_9_13) {
                is_connected_9_13 = correct_connections_9_13.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }


        });
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if (!is_connected_11_12) {
                is_connected_11_12 = correct_connections_11_12.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }


        });
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if (!is_connected_7_8) {
                is_connected_7_8 = correct_connections_7_8.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }


            // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });


        if (is_connected_1_5 && is_connected_2_16 && is_connected_1_14 && is_connected_1_15 && is_connected_17_6
            && is_connected_18_10 && is_connected_4_12 && is_connected_4_11 && is_connected_9_13 && is_connected_11_12
            && is_connected_7_8 && !unallowed_connection_present) {
            alert("Correct Connections");
            document.getElementById('myimage').setAttribute('onclick', 'mcbonoff()');
            document.getElementById('myimage').onclick = function () { mcbonoff(); };
            document.getElementById('check-button').disabled = true;
            document.getElementById('currentValue_fixed').setAttribute('onclick', 'currentValue_fixed()');
            document.getElementById('currentValue_fixed').onclick = function () { currentValue_fixed(); };



            //document.getElementById('currentValue_fixed').disabled=false;
            fun_disable();

            return;
        } else {
            alert("Wrong Connection");
            return;
        }
    });
}

function disab() {
    document.getElementById('myimage').addEventListener("click", connectionerror);
    document.getElementById('myimage').removeAttribute("onclick");
    document.getElementById('currentValue').disabled = true;
    document.getElementById('currentValue').addEventListener("click", currentValue_below);
    document.getElementById('currentValue').removeAttribute("onclick");
    document.getElementById('currentValue_fixed').addEventListener("click", currentValue_fixed);
    document.getElementById('currentValue_fixed').removeAttribute("onclick");
    document.getElementById('currentValue_fixed').disabled = true;
    document.getElementById('volt_reader').disabled = true;
    document.getElementById('volt_reader').value = '0 V';
    document.getElementById('amme_reader').disabled = true;
    document.getElementById('amme_reader').value = '0 A';
    document.getElementById('currentValue_fixed').disabled = true;
    document.getElementById('currentValue_fixed').removeAttribute("onclick");
    document.getElementById('currentPointerValue').disabled = true;
    document.getElementById('currentPointerValue').value = '0';
    document.getElementById('prints').disabled = false;
    document.getElementById('graphmake').disabled = false;
}
function connectionerror() {
    var bool = document.getElementById('check-button');
    if (bool.disabled) {
        return;
    }
    else {
        alert("Make Connections First");
        return;
    }
    return;
}

function fun_error() {
    var bool = document.getElementById('check-button');
    if (bool.disabled) {
        return;
    }
    else {
        alert("Make Connections First");
        return;
    }
    return;
}
function currentValue_below() {
    var count = 0;
    var slide = document.getElementById('currentValue').value;
    var bool = document.getElementById('check-button');
    if (bool.disabled) {

    }
    else if (bool.disabled == false) {
        alert("Make Connections First");
        return;
    }

}
var db1 = "220";
var db2 = "200";
var db3 = "180";
var db4 = "160";
var db5 = "140";
var db6 = "120";
var db7 = "100";
var db8 = "80";
var speedometer = "0";


document.getElementById('currentValue').onchange = function () {
    var value = document.getElementById('currentValue').value;
    var bool_slider = document.getElementById('currentValue');


    if (value == 1) {
        value = db1;
        speedometer = "1360";
        document.getElementById('cirmover2').style.animation = "rotation 0.3s infinite linear";
    }
    else if (value == 2) {
        value = db2;
        speedometer = "1190";
        document.getElementById('cirmover2').style.animation = "rotation 0.5s infinite linear";
    }
    else if (value == 3) {
        value = db3;
        speedometer = "1080";
        document.getElementById('cirmover2').style.animation = "rotation 0.7s infinite linear";
    }
    else if (value == 4) {
        value = db4;
        speedometer = "950";
        document.getElementById('cirmover2').style.animation = "rotation 0.9s infinite linear";
    }
    else if (value == 5) {
        value = db5;
        speedometer = "825";
        document.getElementById('cirmover2').style.animation = "rotation 1.1s infinite linear";
    }
    else if (value == 6) {
        value = db6;
        speedometer = "690";
        document.getElementById('cirmover2').style.animation = "rotation 1.3s infinite linear";
    }
    else if (value == 7) {
        value = db7;
        speedometer = "580";
        document.getElementById('cirmover2').style.animation = "rotation 1.5s infinite linear";
    }
    else if (value == 8) {
        value = db8;
        speedometer = "450";
        document.getElementById('cirmover2').style.animation = "rotation 1.7s infinite linear";
    }
    if (bool_slider.disabled == false) {
        var rangeClock = document.querySelector('.meter-clock');
        if (value == 0) {
            rangeClock.style.transform = 'rotate( ' + -50 + 'deg)';
            document.getElementById('currentPointerValue').ivalue = '0';
            document.getElementById('volt_reader').value = '0 V';

        }
        else {
            rangeClock.style.transform = 'rotate(' + ((20 + value) / 2) + 'deg)';
            document.getElementById('currentPointerValue').value = speedometer;
            document.getElementById('volt_reader').value = value + 'V';
        }

    }

};




function currentValue_fixed() {
    var count = 0;
    document.getElementById('currentValue_fixed').value = 3;
    var slide = document.getElementById('currentValue_fixed').value;
    var bool = document.getElementById('check-button');
    if (bool.disabled) {
    }
    else if (bool.disabled == false) {
        alert("Make Connections First");
        return;
    }
    if (count != slide) {
        document.getElementById('currentValue_fixed').disabled = true;
    }
    if (slide != 0) {
        var rangeClock2 = document.querySelector('.meter-clock2');
        rangeClock2.style.transform = 'rotate(' + -30 + 'deg)';
        document.getElementById('amme_reader').value = '0.8 A';
    }

}




var offstate = true;
function mcbonoff() {
    if (offstate == true) {
        offstate = false;
        document.getElementById('myimage').src = 'mcb2.png';
        document.getElementById('led_l').src = 'push2.png';
        document.getElementById('led_f').src = 'push2.png';
        document.getElementById('led_a').src = 'push2.png';
        document.getElementById('cirmover2').style.animation = "rotation 0.3s infinite linear";
        document.getElementById('check-button').disabled = true;
        document.getElementById('currentValue').disabled = false;
        document.getElementById('currentValue_fixed').disabled = false;
        document.getElementById('prints').disabled = false;
        //	document.getElementById('btn_table').disabled=false;
        document.getElementById('graphmake').disabled = false;
        var slide_below = document.getElementById('currentValue').value;
        if (slide_below == 1) {
            document.getElementById('volt_reader').value = '220 V';
            document.getElementById('currentValue').value = "1";
            document.getElementById('currentPointerValue').value = '1360';
            var rangeClock = document.querySelector('.meter-clock');
            document.getElementById('cirmover2').style.animation = "rotation 0.3s infinite linear";
            rangeClock.style.transform = 'rotate(' + (33) + 'deg)';
        }
        if (slide_below == 2) {
            document.getElementById('volt_reader').value = '200 V';
            document.getElementById('currentValue').value = "2";
            document.getElementById('currentPointerValue').value = '1190';
            var rangeClock = document.querySelector('.meter-clock');
            document.getElementById('cirmover2').style.animation = "rotation 0.5s infinite linear";
            rangeClock.style.transform = 'rotate(' + (23) + 'deg)';
        }
        if (slide_below == 3) {
            document.getElementById('volt_reader').value = '180 V';
            document.getElementById('currentValue').value = "3";
            document.getElementById('currentPointerValue').value = '1080';
            var rangeClock = document.querySelector('.meter-clock');
            document.getElementById('cirmover2').style.animation = "rotation 0.7s infinite linear";
            rangeClock.style.transform = 'rotate(' + (13) + 'deg)';
        }
        if (slide_below == 4) {
            document.getElementById('volt_reader').value = '160 V';
            document.getElementById('currentValue').value = "4";
            document.getElementById('currentPointerValue').value = '950';
            var rangeClock = document.querySelector('.meter-clock');
            document.getElementById('cirmover2').style.animation = "rotation 0.9s infinite linear";
            rangeClock.style.transform = 'rotate(' + (3) + 'deg)';
        }
        if (slide_below == 5) {
            document.getElementById('volt_reader').value = '140 V';
            document.getElementById('currentValue').value = "5";
            document.getElementById('currentPointerValue').value = '825';
            var rangeClock = document.querySelector('.meter-clock');
            document.getElementById('cirmover2').style.animation = "rotation 1.1s infinite linear";
            rangeClock.style.transform = 'rotate(' + (-3) + 'deg)';
        }
        if (slide_below == 6) {
            document.getElementById('volt_reader').value = '120 V';
            document.getElementById('currentValue').value = "6";
            document.getElementById('currentPointerValue').value = '690';
            var rangeClock = document.querySelector('.meter-clock');
            document.getElementById('cirmover2').style.animation = "rotation 1.3s infinite linear";
            rangeClock.style.transform = 'rotate(' + (-13) + 'deg)';
        }
        if (slide_below == 7) {
            document.getElementById('volt_reader').value = '100 V';
            document.getElementById('currentValue').value = "7";
            document.getElementById('currentPointerValue').value = '580';
            var rangeClock = document.querySelector('.meter-clock');
            document.getElementById('cirmover2').style.animation = "rotation 1.5s infinite linear";
            rangeClock.style.transform = 'rotate(' + (-23) + 'deg)';
        } if (slide_below == 8) {
            document.getElementById('volt_reader').value = '80 V';
            document.getElementById('currentValue').value = "8";
            document.getElementById('currentPointerValue').value = '450';
            var rangeClock = document.querySelector('.meter-clock');
            document.getElementById('cirmover2').style.animation = "rotation 1.7s infinite linear";
            rangeClock.style.transform = 'rotate(' + (-33) + 'deg)';
        }
        fun_disable();
        currentValue_fixed();

    }
    else {
        offstate = true;
        document.getElementById('myimage').src = 'mcb1.png';
        document.getElementById('led_l').src = 'push1.png';
        document.getElementById('led_f').src = 'push1.png';
        document.getElementById('led_a').src = 'push1.png';
        document.getElementById('check-button').disabled = true;
        document.getElementById('cirmover2').style.animation = "rotation 0s infinite linear";
        document.getElementById('currentValue').disabled = true;
        document.getElementById('currentValue_fixed').disabled = true;
        document.getElementById('volt_reader').value = '0 V';
        document.getElementById('amme_reader').value = '0 A';
        document.getElementById('currentPointerValue').value = '0';
        document.getElementById('prints').disabled = true;
        //		document.getElementById('btn_table').disabled=true;
        document.getElementById('graphmake').disabled = true;
        var rangeClock = document.querySelector('.meter-clock');
        rangeClock.style.transform = 'rotate(' + (-50) + 'deg)';
        var rangeClock = document.querySelector('.meter-clock2');
        rangeClock.style.transform = 'rotate(' + (-50) + 'deg)';
        //document.getElementById('btn_table').disabled=true;
        //fun_enable();
    }

}

function fun_enable() {
    var instance,
        discs = [],

        addDisc = function (evt) {
            var info = createDisc();
            var e = prepare(info.id);
            instance.draggable(info.id);
            discs.push(info.id);
            evt.stopPropagation();
            evt.preventDefault();
        },

        reset = function (e) {
            for (var i = 0; i < discs.length; i++) {
                var d = document.getElementById(discs[i]);
                if (d) d.parentNode.removeChild(d);
            }
            discs = [];
            e.stopPropagation();
            e.preventDefault();
        },

        initAnimation = function (elId) {
            var el = document.getElementById(elId);

            instance.on(el, 'click', function (e, ui) {
                if (el.className.indexOf("jsPlumb_dragged") > -1) {
                    jsPlumb.removeClass(elId, "jsPlumb_dragged");
                    return;
                }

            });
        },

        // notice there are no dragOptions specified here, which is different from the
        // draggableConnectors2 demo.  all connections on this page are therefore
        // implicitly in the default scope.
        endpoint = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth: 7, stroke: "rgba(198,89,30,0.7)" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 11,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },

        prepare = function (elId) {
            initAnimation(elId);

            return instance.addEndpoint(elId, endpoint);
        },

        // this is overridden by the YUI demo.
        createDisc = function () {
            var d = document.createElement("div");
            d.className = "bigdot";
            document.getElementById("animation-demo").appendChild(d);
            var id = '' + ((new Date().getTime()));
            d.setAttribute("id", id);
            var w = screen.width - 162, h = screen.height - 200;
            var x = (5 * w) + Math.floor(Math.random() * (10 * w));
            var y = (5 * h) + Math.floor(Math.random() * (10 * h));
            d.style.top = y + 'px';
            d.style.left = x + 'px';
            return { d: d, id: id };
        };

    // get a jsPlumb instance, setting some appropriate defaults and a Container.
    instance = jsPlumb.getInstance({
        DragOptions: { cursor: 'wait', zIndex: 20 },
        Endpoint: ["Image", { url: "littledot.png" }],
        Connector: ["Bezier", { curviness: -90 }],
        Container: "canvas"
    });

    // suspend drawing and initialise.
    instance.batch(function () {
        var e1 = prepare("ld1"),
            e2 = prepare("ld2"),
            e4 = prepare("ld4"),
            e5 = prepare("ld5"),
            e6 = prepare("ld6"),
            e7 = prepare("ld7"),
            e8 = prepare("ld8"),
            e9 = prepare("ld9"),
            e10 = prepare("ld10"),
            e11 = prepare("ld11"),
            e12 = prepare("ld12"),
            e13 = prepare("ld13"),
            e14 = prepare("ld14"),
            e15 = prepare("ld15"),
            e16 = prepare("ld16"),
            e17 = prepare("ld17"),
            e18 = prepare("ld18"),


            clearBtn = jsPlumb.getSelector("#anim-clear"),
            addBtn = jsPlumb.getSelector("#add");

        var detachLinks = jsPlumb.getSelector(".littledot .detach");
        instance.on(detachLinks, "click", function (e) {
            instance.deleteConnectionsForElement(this.getAttribute("rel"));
            jsPlumbUtil.consume(e);
        });

        instance.on(document.getElementById("clear"), "click", function (e) {
            instance.detachEveryConnection();
            showConnectionInfo("");
            jsPlumbUtil.consume(e);
        });
    });

    jsPlumb.fire("jsPlumbDemoLoaded", instance);

    document.getElementById("check-button").addEventListener("click", function () {
        var correct_connections_1_5 = [
            {
                "source": "ld1",
                "target": "ld5"
            },

            {
                "source": "ld5",
                "target": "ld1"
            }
        ];

        var correct_connections_2_16 = [
            {
                "source": "ld2",
                "target": "ld16"
            },

            {
                "source": "ld16",
                "target": "ld2"
            }
        ];
        var correct_connections_1_14 = [
            {
                "source": "ld1",
                "target": "ld14"
            },

            {
                "source": "ld14",
                "target": "ld1"
            }
        ];
        var correct_connections_1_15 = [
            {
                "source": "ld1",
                "target": "ld15"
            },

            {
                "source": "ld15",
                "target": "ld1"
            }
        ];
        var correct_connections_17_6 = [
            {
                "source": "ld17",
                "target": "ld6"
            },

            {
                "source": "ld6",
                "target": "ld17"
            }
        ];
        var correct_connections_18_10 = [
            {
                "source": "ld18",
                "target": "ld10"
            },

            {
                "source": "ld10",
                "target": "ld18"
            }
        ];
        var correct_connections_4_12 = [
            {
                "source": "ld4",
                "target": "ld12"
            },

            {
                "source": "ld12",
                "target": "ld4"
            }
        ];
        var correct_connections_4_11 = [
            {
                "source": "ld4",
                "target": "ld11"
            },

            {
                "source": "ld11",
                "target": "ld4"
            }
        ];

        var correct_connections_9_13 = [
            {
                "source": "ld9",
                "target": "ld13"
            },

            {
                "source": "ld13",
                "target": "ld9"
            }
        ];
        var correct_connections_11_12 = [
            {
                "source": "ld11",
                "target": "ld12"
            },

            {
                "source": "ld12",
                "target": "ld11"
            }
        ];
        var correct_connections_7_8 = [
            {
                "source": "ld7",
                "target": "ld8"
            },

            {
                "source": "ld8",
                "target": "ld7"
            }
        ];

        //a connection outside this will invalidate the circuit
        var allowed_connections = [
            {
                "source": "ld1",
                "target": "ld5"
            },

            {
                "source": "ld5",
                "target": "ld1"
            },
            {
                "source": "ld2",
                "target": "ld16"
            },

            {
                "source": "ld16",
                "target": "ld2"
            },
            {
                "source": "ld1",
                "target": "ld14"
            },

            {
                "source": "ld14",
                "target": "ld1"
            },
            {
                "source": "ld1",
                "target": "ld15"
            },

            {
                "source": "ld15",
                "target": "ld1"
            },
            {
                "source": "ld17",
                "target": "ld6"
            },

            {
                "source": "ld6",
                "target": "ld17"
            },
            {
                "source": "ld18",
                "target": "ld10"
            },

            {
                "source": "ld10",
                "target": "ld18"
            },
            {
                "source": "ld4",
                "target": "ld12"
            },

            {
                "source": "ld12",
                "target": "ld4"
            },
            {
                "source": "ld4",
                "target": "ld11"
            },

            {
                "source": "ld11",
                "target": "ld4"
            },
            {
                "source": "ld9",
                "target": "ld13"
            },

            {
                "source": "ld13",
                "target": "ld9"
            },
            {
                "source": "ld11",
                "target": "ld12"
            },

            {
                "source": "ld12",
                "target": "ld11"
            },
            {
                "source": "ld7",
                "target": "ld8"
            },

            {
                "source": "ld8",
                "target": "ld7"

            }
        ];
        var actual_connections = instance.getAllConnections();

        var is_connected_1_5 = false;
        var is_connected_2_16 = false;
        var is_connected_1_14 = false;
        var is_connected_1_15 = false;
        var is_connected_17_6 = false;
        var is_connected_18_10 = false;
        var is_connected_4_12 = false;
        var is_connected_4_11 = false;
        var is_connected_9_13 = false;
        var is_connected_11_12 = false;
        var is_connected_7_8 = false;
        var unallowed_connection_present = false;

        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if (!is_connected_1_5) {
                is_connected_1_5 = correct_connections_1_5.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }

            if (!unallowed_connection_present) {
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                }));
            }
        });
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if (!is_connected_2_16) {
                is_connected_2_16 = correct_connections_2_16.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }


        });
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if (!is_connected_1_14) {
                is_connected_1_14 = correct_connections_1_14.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }


        });
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if (!is_connected_1_15) {
                is_connected_1_15 = correct_connections_1_15.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }


        });
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if (!is_connected_17_6) {
                is_connected_17_6 = correct_connections_17_6.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }


        });
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if (!is_connected_18_10) {
                is_connected_18_10 = correct_connections_18_10.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
        });
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if (!is_connected_4_12) {
                is_connected_4_12 = correct_connections_4_12.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }


        });
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if (!is_connected_4_11) {
                is_connected_4_11 = correct_connections_4_11.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }


        });
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if (!is_connected_9_13) {
                is_connected_9_13 = correct_connections_9_13.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }


        });
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if (!is_connected_11_12) {
                is_connected_11_12 = correct_connections_11_12.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }


        });
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if (!is_connected_7_8) {
                is_connected_7_8 = correct_connections_7_8.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }


            // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });


        if (is_connected_1_5 && is_connected_2_16 && is_connected_1_14 && is_connected_1_15 && is_connected_17_6
            && is_connected_18_10 && is_connected_4_12 && is_connected_4_11 && is_connected_9_13 && is_connected_11_12
            && is_connected_7_8 && !unallowed_connection_present) {
            alert("Correct Connections");
            document.getElementById('myimage').setAttribute('onclick', 'mcbonoff()');
            document.getElementById('myimage').onclick = function () { mcbonoff(); };
            document.getElementById('check-button').disabled = true;
            fun_disable();
            mcbonoff();
            return;
        } else {
            alert("Wrong Connection");
            return;
        }
    }); return;
}
var n = 1;
var createGraph = document.querySelector('.createGraph');
var trace1 = {
    x: [],
    y: [],
    type: 'scatter'
};
var counter = 1;
var readings = true;
var current_readings = 0;
function AddData() {
    clicked = true;
    var btn_pressed = document.getElementById('check-button').disabled;
    var mcb_check = document.getElementById('currentValue').disabled;
    if (btn_pressed == true && mcb_check == false) {

        var bool_slider = document.getElementById("currentValue").value;
        var volt = 0;
        var speed = 0;

        if (current_readings != bool_slider) {
            current_readings = bool_slider;
            readings = true;
        }

        if (bool_slider == 1) {
            0
            volt = "220";
            speed = "1360";
        }
        if (bool_slider == 2) {
            volt = "200";
            speed = "1190";
        }
        if (bool_slider == 3) {
            volt = "180";
            speed = "1080";
        }
        if (bool_slider == 4) {
            volt = "160";
            speed = "950";
        }
        if (bool_slider == 5) {
            volt = "140";
            speed = "825";
        }
        if (bool_slider == 6) {
            volt = "120";
            speed = "690";
        }
        if (bool_slider == 7) {
            volt = "100";
            speed = "580";
        }
        if (bool_slider == 8) {
            volt = "80";
            speed = "450";
        }

        if (readings) {
            if (counter < 9) {
                var table = document.getElementById("mytable");
                var row = table.insertRow(-1);
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
                var cell3 = row.insertCell(2);
                cell1.innerHTML = n++;
                cell2.innerHTML = volt;
                cell3.innerHTML = speed;
                counter++;
                trace1.x.push(cell2.innerHTML);
                trace1.y.push(cell3.innerHTML);
                readings = false;
            } else {
                alert("You can add maximum 8 readings in the table")
            }
        }
    }
    else if (btn_pressed == false && mcb_check == true) {
        alert("Make Connections First");
    }
    else if (btn_pressed == true && mcb_check == true) {
        alert("Turn On The MCB");
    }

}

function makegraph() {
    if (counter < 7) {
        alert("Take atleast 6 readings in the table");
    }
    else {
        var data = [trace1];
        var layout = {
            title: {
                text: '<b>Speed (RPM) vs Voltage (V)</b>',
                
            },
            margin: {
                r: 20,
                t: 85,
                b: 40,
            },
            xaxis: {
                dtick: 20,
                title: {
                    text: '<b>Voltage (V)</b>',
                    font: {
                        family: 'Courier New,monospace',
                        size: 18,
                        color: '#010101',

                    }
                },
            },
            yaxis: {
                dtick: 200,
                title: {
                    text: '<b>Speed (RPM)</b>',
                    font: {
                        family: 'Courier New,monospace',
                        size: 18,
                        color: '#010101'
                    }
                },
            }
        };
        Plotly.newPlot('myDiv', data, layout, { showSendToCloud: true });
    }

}


