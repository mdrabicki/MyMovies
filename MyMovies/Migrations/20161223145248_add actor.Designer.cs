using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using MyMovies.DAL;

namespace MyMovies.Migrations
{
    [DbContext(typeof(MyMoviesContext))]
    [Migration("20161223145248_add actor")]
    partial class addactor
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
            modelBuilder
                .HasAnnotation("ProductVersion", "1.0.2")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("MyMovies.DAL.Actor", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<DateTime>("Birthday");

                    b.Property<string>("FirstName");

                    b.Property<string>("LastName");

                    b.HasKey("Id");

                    b.ToTable("Actors");
                });

            modelBuilder.Entity("MyMovies.DAL.ActorMovie", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int?>("ActorsId");

                    b.Property<int?>("MoviesId");

                    b.HasKey("Id");

                    b.HasIndex("ActorsId");

                    b.HasIndex("MoviesId");

                    b.ToTable("ActorMovie");
                });

            modelBuilder.Entity("MyMovies.DAL.Movie", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Title");

                    b.Property<int>("Year");

                    b.HasKey("Id");

                    b.ToTable("Movies");
                });

            modelBuilder.Entity("MyMovies.DAL.Review", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Comment");

                    b.Property<int?>("MovieId");

                    b.Property<short>("Rate");

                    b.HasKey("Id");

                    b.HasIndex("MovieId");

                    b.ToTable("Review");
                });

            modelBuilder.Entity("MyMovies.DAL.ActorMovie", b =>
                {
                    b.HasOne("MyMovies.DAL.Actor", "Actors")
                        .WithMany("ActorMovie")
                        .HasForeignKey("ActorsId");

                    b.HasOne("MyMovies.DAL.Movie", "Movies")
                        .WithMany("ActorMovie")
                        .HasForeignKey("MoviesId");
                });

            modelBuilder.Entity("MyMovies.DAL.Review", b =>
                {
                    b.HasOne("MyMovies.DAL.Movie", "Movie")
                        .WithMany("Reviews")
                        .HasForeignKey("MovieId");
                });
        }
    }
}
