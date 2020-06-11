import CreatedUpdatedProps from './CreatedUpdatedProps';
import { KeyValue } from './Global';
import SiteArea from './SiteArea';
import { InactivityStatus } from './Transaction';
import User from './User';

export default interface ChargingStation extends CreatedUpdatedProps {
  id?: string;
  siteAreaID: string;
  chargePointSerialNumber: string;
  chargePointModel: string;
  chargeBoxSerialNumber: string;
  chargePointVendor: string;
  iccid: string;
  imsi: string;
  meterType: string;
  firmwareVersion: string;
  meterSerialNumber: string;
  endpoint: string;
  ocppVersion: string;
  ocppProtocol: string;
  cfApplicationIDAndInstanceIndex: string;
  lastHeartBeat: Date;
  deleted: boolean;
  inactive: boolean;
  lastReboot: Date;
  chargingStationURL: string;
  maximumPower: number;
  voltage: number;
  powerLimitUnit: string;
  coordinates: number[];
  chargePoints: ChargePoint[];
  connectors: Connector[];
  currentIPAddress?: string;
  siteArea?: SiteArea;
  capabilities?: ChargingStationCapabilities;
  ocppStandardParameters?: KeyValue[];
  ocppVendorParameters?: KeyValue[];
}

export enum CurrentType {
  AC = 'AC',
  DC = 'DC'
}

export interface ChargePoint {
  chargePointID: number;
  currentType: CurrentType;
  voltage: number;
  amperage: number;
  numberOfConnectedPhase: number;
  cannotChargeInParallel: boolean;
  sharePowerToAllConnectors: boolean;
  excludeFromPowerLimitation: boolean;
  ocppParamForPowerLimitation: string;
  power: number;
  efficiency: number;
  connectorIDs: number[];
}

export interface Connector {
  connectorId: number;
  currentInstantWatts: number;
  currentStateOfCharge?: number;
  currentTotalConsumptionWh?: number;
  currentTotalInactivitySecs?: number;
  currentInactivityStatus: InactivityStatus;
  currentTransactionID: number;
  currentTransactionDate: Date;
  currentTagID: string;
  status: ChargePointStatus;
  errorCode?: string;
  info?: string;
  vendorErrorCode?: string;
  power: number;
  type: ConnectorType;
  voltage?: number;
  amperage?: number;
  userID?: string;
  user?: User;
  amperageLimit?: number;
  statusLastChangedOn?: Date;
  numberOfConnectedPhase?: number;
  currentType?: CurrentType;
  chargePointID?: number;
}

export enum ChargePointStatus {
  AVAILABLE = 'Available',
  PREPARING = 'Preparing',
  CHARGING = 'Charging',
  OCCUPIED = 'Occupied',
  SUSPENDED_EVSE = 'SuspendedEVSE',
  SUSPENDED_EV = 'SuspendedEV',
  FINISHING = 'Finishing',
  RESERVED = 'Reserved',
  UNAVAILABLE = 'Unavailable',
  FAULTED = 'Faulted',
}

export enum ConnectorType {
  TYPE_2 = 'T2',
  COMBO_CCS = 'CCS',
  CHADEMO = 'C',
  TYPE_1 = 'T1',
  TYPE_1_CCS = 'T1CCS',
  DOMESTIC = 'D',
  UNKNOWN = 'U',
}

export interface ChargingStationCapabilities {
  supportStaticLimitation?: boolean;
  supportChargingProfiles?: boolean;
  supportTxDefaultProfile?: boolean;
}

export interface OcppCommand {
  command: string;
  parameters: string[];
}
