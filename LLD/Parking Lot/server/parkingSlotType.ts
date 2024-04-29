const enum ParkingSlotType {
    TwoWheeler,
    Compact,
    Medium,
    Large
}

const getPriceForParking = (type: ParkingSlotType, duration: number) => {
    switch (type) {
        case ParkingSlotType.TwoWheeler:
            return duration * 0.05;
        case ParkingSlotType.Compact:
            return duration * 0.075;
        case ParkingSlotType.Medium:
            return duration * 0.09;
        case ParkingSlotType.Large:
            return duration * 0.10;
    }
}