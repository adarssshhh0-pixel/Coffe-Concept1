 class Coffee {
    private String type;
    private double size; // in ounces
    private boolean hasMilk;
    private boolean hasSugar;

    public Coffee(String type, double size, boolean hasMilk, boolean hasSugar) {
        this.type = type;
        this.size = size;
        this.hasMilk = hasMilk;
        this.hasSugar = hasSugar;
    }

    public String getType() {
        return type;
    }

    public double getSize() {
        return size;
    }

    public boolean hasMilk() {
        return hasMilk;
    }

    public boolean hasSugar() {
        return hasSugar;
    }

    @Override
    public String toString() {
        return "Coffee{" +
                "type='" + type + '\'' +
                ", size=" + size +
                ", hasMilk=" + hasMilk +
                ", hasSugar=" + hasSugar +
                '}';
    }
}