export default function DashboardPage() {
  return (
    <div className="flex items-center justify-center h-[calc(100vh-8rem)]">
      <div className="text-center space-y-2">
        <h1 className="text-2xl font-bold">Bienvenido a Pilcha Dashboard</h1>
        <p className="text-muted-foreground">
          Selecciona una seccion del sidebar para comenzar
        </p>
      </div>
    </div>
  );
}