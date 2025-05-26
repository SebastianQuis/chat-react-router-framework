
const NoContactSelected = () => {
    return (
        <div className="flex flex-col items-center h-full p-4 text-center">
            <div className="p-6 rounded-lg max-w-md w-full text-sm">
                <div className="flex flex-col items-center gap-4">
                    <div className="bg-muted p-3 rounded-full animate-pulse">
                        <div className="w-8 h-8 rounded-full bg-muted-foreground/20" />
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-2">Selecciona un cliente</h3>
                        <p className="text-muted-foreground">
                            Por favor, selecciona un cliente de la lista para ver sus detalles de contacto.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NoContactSelected