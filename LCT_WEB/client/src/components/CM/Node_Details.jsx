import React, { Component } from "react";
import "./../../css/ne.css";
class Node_Details extends React.Component {
  state = {};

  constructor(props) {
    super(props);
    const data = this.props.data;
    this.state = {
      value: "select",
      data: data,
      NodeInfo: {
        CtrlVersion: data.CtrlVersion,
        DataVersion: data.DataVersion,
        GuiId: data.Header.GuiId,
        Degree: data.Degree,
        Direction: data.Direction,
        Gateway: data.Gateway,
        GneAddrType: data.GneAddrType,
        GneFlag: data.GneFlag,
        GneGateWay: data.GneGateWay,
        GneIp: data.GneIp,
        GneIpPrefixLen: data.GneIpPrefixLen,
        GneIpv6: data.GneIpv6,
        IlaType: data.IlaType,
        LctIp: data.LctIp,
        McpIp: data.McpIp,
        NeType: data.NeType,
        OpticalReach: data.OpticalReach,
        PotpType: data.PotpType,
        RouterAddrType: data.RouterAddrType,
        RouterId: data.RouterId,
        RouterIpPrefixLen: data.RouterIpPrefixLen,
        SAPI: data.SAPI,
        SiteName: data.SiteName,
        StationName: data.StationName,
        NetworkId: data.NetworkId,
        NodeId: data.NeId,
        Systemcapacity: data.Systemcapacity,
        TimeStamp: data.TimeStamp,
        Topology: data.Topology,
        Vlan: data.Vlan,
        MacAddress: data.MacAddress,
        OrderOfOtm: data.OrderOfOtm,
        Date: data.Header.Date,
        Month: data.Date.Month,
        Year: data.Date.Year,
        Hour: data.Date.Hour,
        Minute: data.Date.Minute,
        Second: data.Date.Seconds
      }
    };
    console.log("this.state", this.state);
  }
  onChange(e) {
    this.setState({
      value: e.target.value
    });
  }

  render() {
    return (
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="row">
              <div class="col-md-12">
                <div class="panel panel-default" className="default">
                  <div class="panel-heading clearfix" className="head">
                    <h3 class="panel-title">Get/Set NE Information</h3>
                  </div>
                  <div class="panel-body" className="defaultpanel">
                    <div class="row">
                      <div class="col-sm-6 other">
                        <div class="input-group  mb-3">
                          <div class="input-group-prepend">
                            <span class="input-group-text">Site Name:</span>
                          </div>
                          <input
                            type="text"
                            class="form-control"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                            value={this.state.NodeInfo.SiteName}
                          />
                        </div>
                        <div class="input-group mb-3">
                          <div class="input-group-prepend">
                            <label
                              class="input-group-text"
                              for="inputGroupSelect01"
                            >
                              NE Type
                            </label>
                          </div>
                          <select
                            class="custom-select"
                            id="inputGroupSelect01"
                            value={this.state.value}
                            onChange={this.onChange.bind(this)}
                          >
                            <option selected>
                              {this.state.NodeInfo.NeType}
                            </option>
                          </select>
                        </div>
                        <div class="input-group mb-3">
                          <div class="input-group-prepend">
                            <label
                              class="input-group-text"
                              for="inputGroupSelect01"
                            >
                              Degree:
                            </label>
                          </div>
                          <select
                            class="custom-select"
                            id="inputGroupSelect01"
                            value={this.state.value}
                            onChange={this.onChange.bind(this)}
                          >
                            <option selected>
                              {this.state.NodeInfo.Degree}
                            </option>
                          </select>
                        </div>
                      </div>
                      <div class="col-sm-6 other2">
                        <div class="input-group  mb-3">
                          <div class="input-group-prepend">
                            <span class="input-group-text">Station Name:</span>
                          </div>
                          <input
                            type="text"
                            class="form-control"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                            value={this.state.NodeInfo.StationName}
                          />
                        </div>
                        <div class="input-group mb-3">
                          <div class="input-group-prepend">
                            <label
                              class="input-group-text"
                              for="inputGroupSelect01"
                            >
                              GNE Flag
                            </label>
                          </div>
                          <select
                            class="custom-select"
                            id="inputGroupSelect01"
                            value={this.state.value}
                            onChange={this.onChange.bind(this)}
                          >
                            <option selected>
                              {this.state.NodeInfo.GneFlag}
                            </option>
                      
                          </select>
                        </div>
                        <div class="input-group mb-3">
                          <div class="input-group-prepend">
                            <label
                              class="input-group-text"
                              for="inputGroupSelect01"
                            >
                              ILA Enable:
                            </label>
                          </div>
                          <span
                            class="input-group-addon"
                            className="addoncheck"
                          >
                            <input type="checkbox" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-12">
                <div class="panel panel-default" className="default">
                  <div class="panel-heading clearfix" className="head">
                    <i class="icon-calendar" />
                    <h3 class="panel-title">POTP Details</h3>
                  </div>
                  <div class="panel-body" className="defaultpanel">
                    <div class="row">
                      <div class="col-sm-6 other">
                        <div class="input-group mb-3">
                          <div class="input-group-prepend">
                            <label
                              class="input-group-text"
                              for="inputGroupSelect01"
                            >
                              POTP Type
                            </label>
                          </div>
                          <select
                            class="custom-select"
                            id="inputGroupSelect01"
                            value={this.state.value}
                            onChange={this.onChange.bind(this)}
                          >
                            <option selected>
                              {this.state.NodeInfo.PotpType}
                            </option>
                            
                          </select>
                        </div>
                      </div>
                      <div class="col-sm-6 other2">
                        <div class="input-group mb-3">
                          <div class="input-group-prepend">
                            <label
                              class="input-group-text"
                              for="inputGroupSelect01"
                            >
                              Enable POTP LCT
                            </label>
                          </div>
                          <span
                            class="input-group-addon"
                            className="addoncheck"
                          >
                            <input type="checkbox" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-12">
                <div class="panel panel-default" className="default">
                  <div class="panel-heading clearfix" className="head">
                    <i class="icon-calendar" />
                    <h3 class="panel-title">IP Details</h3>
                  </div>
                  <div class="panel-body" className="defaultpanel">
                    <div class="row">
                      <div class="col-sm-12 other">
                        <div class="input-group  mb-3">
                          <div class="input-group-prepend">
                            <span class="input-group-text">IP Address:</span>
                          </div>
                          <input
                            type="text"
                            class="form-control"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                            value={this.state.NodeInfo.LctIp}
                          />
                        </div>

                        <div class="input-group  mb-3">
                          <div class="input-group-prepend">
                            <span class="input-group-text">Subnet:</span>
                          </div>
                          <input
                            type="text"
                            class="form-control"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                          />
                        </div>
                        <div class="input-group  mb-3">
                          <div class="input-group-prepend">
                            <span class="input-group-text">Gateway:</span>
                          </div>
                          <input
                            type="text"
                            class="form-control"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                            value={this.state.NodeInfo.Gateway}
                          />
                        </div>
                        <div class="input-group  mb-3">
                          <div class="input-group-prepend">
                            <span class="input-group-text">IPv6:</span>
                          </div>
                          <input
                            type="text"
                            class="form-control"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                            value={this.state.NodeInfo.GneIpv6}
                          />
                        </div>
                        <div class="input-group  mb-3">
                          <div class="input-group-prepend">
                            <span class="input-group-text">MAC:</span>
                          </div>
                          <input
                            type="text"
                            class="form-control"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                            value={this.state.NodeInfo.MacAddress}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default  Node_Details;
