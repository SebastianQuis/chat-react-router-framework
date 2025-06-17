
const ContactInformationSkeleton = () => {
    return (
        <div className="w-80 border-1 px-2">
            <div className="flex flex-col items-center pb-6 border-b">
                <div className="h-20 w-20 rounded-full bg-muted animate-pulse mb-3" />
                <div className="h-6 w-32 bg-muted-foreground/20 rounded animate-pulse mb-2" />
                <div className="h-4 w-24 bg-muted-foreground/20 rounded animate-pulse mb-2" />
                <div className="flex items-center mt-1">
                    <div className="h-2 w-2 rounded-full bg-muted-foreground/20 mr-1 animate-pulse" />
                    <div className="h-3 w-12 bg-muted-foreground/20 rounded animate-pulse" />
                </div>
            </div>

            <div className="py-4 space-y-4">
                <div>
                    <div className="h-4 w-32 bg-muted-foreground/20 rounded animate-pulse mb-2" />
                    <div className="space-y-2">
                        <div className="flex justify-between">
                            <div className="h-4 w-16 bg-muted-foreground/20 rounded animate-pulse" />
                            <div className="h-4 w-24 bg-muted-foreground/20 rounded animate-pulse" />
                        </div>
                        <div className="flex justify-between">
                            <div className="h-4 w-16 bg-muted-foreground/20 rounded animate-pulse" />
                            <div className="h-4 w-24 bg-muted-foreground/20 rounded animate-pulse" />
                        </div>
                        <div className="flex justify-between">
                            <div className="h-4 w-16 bg-muted-foreground/20 rounded animate-pulse" />
                            <div className="h-4 w-24 bg-muted-foreground/20 rounded animate-pulse" />
                        </div>
                    </div>
                </div>

                <div>
                    <div className="h-4 w-32 bg-muted-foreground/20 rounded animate-pulse mb-2" />
                    <div className="space-y-2">
                        <div className="flex justify-between">
                            <div className="h-4 w-16 bg-muted-foreground/20 rounded animate-pulse" />
                            <div className="h-4 w-24 bg-muted-foreground/20 rounded animate-pulse" />
                        </div>
                        <div className="flex justify-between">
                            <div className="h-4 w-16 bg-muted-foreground/20 rounded animate-pulse" />
                            <div className="h-4 w-24 bg-muted-foreground/20 rounded animate-pulse" />
                        </div>
                        <div className="flex justify-between">
                            <div className="h-4 w-16 bg-muted-foreground/20 rounded animate-pulse" />
                            <div className="h-4 w-24 bg-muted-foreground/20 rounded animate-pulse" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="pt-4 border-t">
                <div className="h-9 w-full bg-muted-foreground/20 rounded animate-pulse" />
            </div>
        </div>
    )
}

export default ContactInformationSkeleton